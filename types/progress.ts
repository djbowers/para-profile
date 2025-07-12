import type React from 'react';

import { Database } from './supabase';

export interface ProgressItem {
  id?: string;
  name: string;
  progress: number;
  level: number;
  xp: number;
  maxXp: number;
  category: string;
  icon?: React.ReactNode;
}

export type DatabaseProgressItem =
  Database['public']['Tables']['progress_items']['Row'];
