import {
  Archive,
  Brain,
  Heart,
  MapPin,
  Shield,
  Star,
  Sword,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';

import React from 'react';

import type { ProgressItem } from '../types/progress';
import { supabase } from './supabase';

// Icon mapping for database storage
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  MapPin,
  Archive,
  Star,
  Zap,
  Trophy,
  Sword,
  Shield,
  Heart,
  Brain,
};

// Helper function to check if Supabase client is available
const checkSupabaseClient = () => {
  if (!supabase) {
    throw new Error('Supabase client is not available');
  }
};

// Convert database row to ProgressItem
export function dbRowToProgressItem(row: {
  id: string;
  name: string;
  progress: number;
  level: number;
  xp: number;
  max_xp: number;
  category: string;
  icon_name: string | null;
}): ProgressItem {
  const IconComponent = row.icon_name ? iconMap[row.icon_name] : undefined;
  return {
    id: row.id,
    name: row.name,
    progress: row.progress,
    level: row.level,
    xp: row.xp,
    maxXp: row.max_xp,
    category: row.category,
    icon: IconComponent
      ? React.createElement(IconComponent, { className: 'w-4 h-4' })
      : undefined,
  };
}

// Convert ProgressItem to database insert format
export function progressItemToDb(
  item: Omit<ProgressItem, 'icon'>,
  userId: string,
  type: 'project' | 'area' | 'resource' | 'archived'
) {
  return {
    user_id: userId,
    name: item.name,
    progress: item.progress,
    level: item.level,
    xp: item.xp,
    max_xp: item.maxXp,
    category: item.category,
    icon_name: null, // We'll store icon names as strings
    type,
  };
}

// API Functions
export async function getProgressItems(
  userId: string,
  type: 'project' | 'area' | 'resource' | 'archived'
) {
  checkSupabaseClient();

  const { data, error } = await supabase!
    .from('progress_items')
    .select('*')
    .eq('user_id', userId)
    .eq('type', type)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching progress items:', error);
    throw error;
  }

  return data.map(dbRowToProgressItem);
}

export async function createProgressItem(
  item: Omit<ProgressItem, 'icon'>,
  userId: string,
  type: 'project' | 'area' | 'resource' | 'archived'
) {
  checkSupabaseClient();

  const { data, error } = await supabase!
    .from('progress_items')
    .insert(progressItemToDb(item, userId, type))
    .select()
    .single();

  if (error) {
    console.error('Error creating progress item:', error);
    throw error;
  }

  return dbRowToProgressItem(data);
}

export async function updateProgressItem(
  id: string,
  updates: Partial<Omit<ProgressItem, 'icon' | 'id'>>
) {
  checkSupabaseClient();

  const { data, error } = await supabase!
    .from('progress_items')
    .update({
      ...updates,
      max_xp: updates.maxXp,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating progress item:', error);
    throw error;
  }

  return dbRowToProgressItem(data);
}

export async function deleteProgressItem(id: string) {
  checkSupabaseClient();

  const { error } = await supabase!
    .from('progress_items')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting progress item:', error);
    throw error;
  }
}

export async function moveProgressItem(
  id: string,
  newType: 'project' | 'area' | 'resource' | 'archived'
) {
  checkSupabaseClient();

  const { data, error } = await supabase!
    .from('progress_items')
    .update({
      type: newType,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error moving progress item:', error);
    throw error;
  }

  return dbRowToProgressItem(data);
}
