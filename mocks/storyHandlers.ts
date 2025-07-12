import { delay, http, HttpResponse } from 'msw';
import { minimalMockData } from './mockData';

// Supabase API base URL
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock-supabase.supabase.co';
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;

// Empty data handlers
export const emptyHandlers = [
  http.get(`${SUPABASE_REST_URL}/progress_items`, () => {
    return HttpResponse.json([]);
  }),
];

// Loading handlers (with delay)
export const loadingHandlers = [
  http.get(`${SUPABASE_REST_URL}/progress_items`, async () => {
    await delay(2000); // 2 second delay
    return HttpResponse.json([]);
  }),
];

// Error handlers
export const errorHandlers = [
  http.get(`${SUPABASE_REST_URL}/progress_items`, () => {
    return HttpResponse.json(
      { error: 'Something went wrong', code: 500 },
      { status: 500 }
    );
  }),
];

// Single item handlers (minimal data)
export const minimalHandlers = [
  http.get(`${SUPABASE_REST_URL}/progress_items`, ({ request }) => {
    const url = new URL(request.url);
    const typeFilter = url.searchParams.get('type');
    const cleanType = typeFilter?.replace('eq.', '');

    return HttpResponse.json(minimalMockData[cleanType || 'project'] || []);
  }),
];
