import { DatabaseProgressItem } from '@/types/progress';

// Constants for consistent mock data
export const MOCK_USER_ID = 'test-user-id';
export const MOCK_USER_EMAIL = 'test@example.com';
export const MOCK_USER_NAME = 'Test User';

// Complete mock progress items dataset
export const mockProgressItems: Array<DatabaseProgressItem> = [
  // Projects (4 items)
  {
    id: '1',
    user_id: MOCK_USER_ID,
    name: 'Mobile App Development',
    progress: 75,
    level: 8,
    xp: 750,
    max_xp: 1000,
    category: 'Development',
    icon_name: 'Zap',
    type: 'project',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    user_id: MOCK_USER_ID,
    name: 'Marketing Campaign',
    progress: 45,
    level: 5,
    xp: 450,
    max_xp: 1000,
    category: 'Marketing',
    icon_name: 'Target',
    type: 'project',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    user_id: MOCK_USER_ID,
    name: 'Website Redesign',
    progress: 90,
    level: 12,
    xp: 900,
    max_xp: 1000,
    category: 'Design',
    icon_name: 'Star',
    type: 'project',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    user_id: MOCK_USER_ID,
    name: 'Team Training',
    progress: 30,
    level: 3,
    xp: 300,
    max_xp: 1000,
    category: 'Leadership',
    icon_name: 'Shield',
    type: 'project',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // Areas (4 items)
  {
    id: '5',
    user_id: MOCK_USER_ID,
    name: 'Health & Fitness',
    progress: 65,
    level: 7,
    xp: 650,
    max_xp: 1000,
    category: 'Personal',
    icon_name: 'Heart',
    type: 'area',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '6',
    user_id: MOCK_USER_ID,
    name: 'Financial Management',
    progress: 80,
    level: 10,
    xp: 800,
    max_xp: 1000,
    category: 'Finance',
    icon_name: 'Trophy',
    type: 'area',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '7',
    user_id: MOCK_USER_ID,
    name: 'Professional Network',
    progress: 55,
    level: 6,
    xp: 550,
    max_xp: 1000,
    category: 'Career',
    icon_name: 'MapPin',
    type: 'area',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '8',
    user_id: MOCK_USER_ID,
    name: 'Learning & Development',
    progress: 85,
    level: 11,
    xp: 850,
    max_xp: 1000,
    category: 'Education',
    icon_name: 'Brain',
    type: 'area',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // Resources (4 items)
  {
    id: '9',
    user_id: MOCK_USER_ID,
    name: 'AI & Machine Learning',
    progress: 40,
    level: 4,
    xp: 400,
    max_xp: 1000,
    category: 'Technology',
    icon_name: 'Zap',
    type: 'resource',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '10',
    user_id: MOCK_USER_ID,
    name: 'Investment Strategies',
    progress: 60,
    level: 6,
    xp: 600,
    max_xp: 1000,
    category: 'Finance',
    icon_name: 'Trophy',
    type: 'resource',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '11',
    user_id: MOCK_USER_ID,
    name: 'Design Principles',
    progress: 70,
    level: 8,
    xp: 700,
    max_xp: 1000,
    category: 'Creative',
    icon_name: 'Star',
    type: 'resource',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '12',
    user_id: MOCK_USER_ID,
    name: 'Leadership Skills',
    progress: 50,
    level: 5,
    xp: 500,
    max_xp: 1000,
    category: 'Management',
    icon_name: 'Sword',
    type: 'resource',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // Archived (2 items)
  {
    id: '13',
    user_id: MOCK_USER_ID,
    name: 'Old Website Project',
    progress: 100,
    level: 15,
    xp: 1000,
    max_xp: 1000,
    category: 'Completed',
    icon_name: 'Archive',
    type: 'archived',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '14',
    user_id: MOCK_USER_ID,
    name: 'Previous Marketing Campaign',
    progress: 100,
    level: 12,
    xp: 1000,
    max_xp: 1000,
    category: 'Completed',
    icon_name: 'Archive',
    type: 'archived',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
];

// Filtered datasets for different scenarios
export const getItemsByType = (type: string) =>
  mockProgressItems.filter((item) => item.type === type);

export const getItemsByUserId = (userId: string) =>
  mockProgressItems.filter((item) => item.user_id === userId);

export const getItemsByTypeAndUser = (type: string, userId: string) =>
  mockProgressItems.filter(
    (item) => item.type === type && item.user_id === userId
  );

// Minimal datasets (one item per type) for story scenarios
export const minimalMockData: Record<string, DatabaseProgressItem[]> = {
  project: [mockProgressItems.find((item) => item.type === 'project')!],
  area: [mockProgressItems.find((item) => item.type === 'area')!],
  resource: [mockProgressItems.find((item) => item.type === 'resource')!],
  archived: [mockProgressItems.find((item) => item.type === 'archived')!],
};

// Helper to get next available ID for new items
let nextId = 15;
export const getNextId = () => String(nextId++);

// Mock session data
export const createMockSession = () => ({
  access_token: 'mock-access-token',
  token_type: 'bearer' as const,
  expires_in: 3600,
  expires_at: Date.now() / 1000 + 3600,
  refresh_token: 'mock-refresh-token',
  user: {
    id: MOCK_USER_ID,
    email: MOCK_USER_EMAIL,
    app_metadata: {},
    user_metadata: {
      full_name: MOCK_USER_NAME,
    },
    aud: 'authenticated',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    is_anonymous: false,
  },
});
