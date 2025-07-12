import { DatabaseProgressItem } from '@/types/progress';
import { http, HttpResponse } from 'msw';
import {
  mockProgressItems,
  getNextId,
  MOCK_USER_ID,
  MOCK_USER_EMAIL,
  MOCK_USER_NAME,
} from './mockData';

// Supabase API base URL
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock-supabase.supabase.co';
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;

export const handlers = [
  // Auth endpoints
  http.post(`${SUPABASE_URL}/auth/v1/token`, () => {
    return HttpResponse.json({
      access_token: 'mock-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: 'mock-refresh-token',
      user: {
        id: MOCK_USER_ID,
        email: MOCK_USER_EMAIL,
        user_metadata: {
          full_name: MOCK_USER_NAME,
        },
      },
    });
  }),

  http.get(`${SUPABASE_URL}/auth/v1/user`, () => {
    return HttpResponse.json({
      id: MOCK_USER_ID,
      email: MOCK_USER_EMAIL,
      user_metadata: {
        full_name: MOCK_USER_NAME,
      },
    });
  }),

  // Get progress items
  http.get(`${SUPABASE_REST_URL}/progress_items`, ({ request }) => {
    const url = new URL(request.url);
    const typeFilter = url.searchParams.get('type');
    const userIdFilter = url.searchParams.get('user_id');

    let filteredItems = mockProgressItems;

    if (typeFilter) {
      const cleanType = typeFilter.replace('eq.', '');
      filteredItems = filteredItems.filter((item) => item.type === cleanType);
    }

    if (userIdFilter) {
      const cleanUserId = userIdFilter.replace('eq.', '');
      filteredItems = filteredItems.filter(
        (item) => item.user_id === cleanUserId
      );
    }

    return HttpResponse.json(filteredItems);
  }),

  // Create progress item
  http.post(`${SUPABASE_REST_URL}/progress_items`, async ({ request }) => {
    const newItem = (await request.json()) as DatabaseProgressItem;
    const createdItem = {
      ...newItem,
      id: getNextId(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    mockProgressItems.push(createdItem);
    return HttpResponse.json(createdItem);
  }),

  // Update progress item
  http.patch(`${SUPABASE_REST_URL}/progress_items`, async ({ request }) => {
    const url = new URL(request.url);
    const idFilter = url.searchParams.get('id');
    const updates = (await request.json()) as DatabaseProgressItem;

    if (idFilter) {
      const cleanId = idFilter.replace('eq.', '');
      const itemIndex = mockProgressItems.findIndex(
        (item) => item.id === cleanId
      );

      if (itemIndex !== -1) {
        mockProgressItems[itemIndex] = {
          ...mockProgressItems[itemIndex],
          ...updates,
          updated_at: new Date().toISOString(),
        };
        return HttpResponse.json(mockProgressItems[itemIndex]);
      }
    }

    return HttpResponse.json({ error: 'Item not found' }, { status: 404 });
  }),

  // Delete progress item
  http.delete(`${SUPABASE_REST_URL}/progress_items`, ({ request }) => {
    const url = new URL(request.url);
    const idFilter = url.searchParams.get('id');

    if (idFilter) {
      const cleanId = idFilter.replace('eq.', '');
      const itemIndex = mockProgressItems.findIndex(
        (item) => item.id === cleanId
      );

      if (itemIndex !== -1) {
        mockProgressItems.splice(itemIndex, 1);
        return HttpResponse.json({}, { status: 204 });
      }
    }

    return HttpResponse.json({ error: 'Item not found' }, { status: 404 });
  }),
];
