import type React from 'react';

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
