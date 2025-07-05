import React from 'react'
import {
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
} from 'lucide-react'
import type { ProgressItem } from '../types/progress'

export const initialProjects: ProgressItem[] = [
  {
    name: 'Mobile App Development',
    progress: 75,
    level: 8,
    xp: 750,
    maxXp: 1000,
    category: 'Development',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: 'Marketing Campaign',
    progress: 45,
    level: 5,
    xp: 450,
    maxXp: 1000,
    category: 'Marketing',
    icon: <Target className="w-4 h-4" />,
  },
  {
    name: 'Website Redesign',
    progress: 90,
    level: 12,
    xp: 900,
    maxXp: 1000,
    category: 'Design',
    icon: <Star className="w-4 h-4" />,
  },
  {
    name: 'Team Training',
    progress: 30,
    level: 3,
    xp: 300,
    maxXp: 1000,
    category: 'Leadership',
    icon: <Shield className="w-4 h-4" />,
  },
]

export const initialAreas: ProgressItem[] = [
  {
    name: 'Health & Fitness',
    progress: 65,
    level: 7,
    xp: 650,
    maxXp: 1000,
    category: 'Personal',
    icon: <Heart className="w-4 h-4" />,
  },
  {
    name: 'Financial Management',
    progress: 80,
    level: 10,
    xp: 800,
    maxXp: 1000,
    category: 'Finance',
    icon: <Trophy className="w-4 h-4" />,
  },
  {
    name: 'Professional Network',
    progress: 55,
    level: 6,
    xp: 550,
    maxXp: 1000,
    category: 'Career',
    icon: <MapPin className="w-4 h-4" />,
  },
  {
    name: 'Learning & Development',
    progress: 85,
    level: 11,
    xp: 850,
    maxXp: 1000,
    category: 'Education',
    icon: <Brain className="w-4 h-4" />,
  },
]

export const initialResources: ProgressItem[] = [
  {
    name: 'AI & Machine Learning',
    progress: 40,
    level: 4,
    xp: 400,
    maxXp: 1000,
    category: 'Technology',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: 'Investment Strategies',
    progress: 60,
    level: 6,
    xp: 600,
    maxXp: 1000,
    category: 'Finance',
    icon: <Trophy className="w-4 h-4" />,
  },
  {
    name: 'Design Principles',
    progress: 70,
    level: 8,
    xp: 700,
    maxXp: 1000,
    category: 'Creative',
    icon: <Star className="w-4 h-4" />,
  },
  {
    name: 'Leadership Skills',
    progress: 50,
    level: 5,
    xp: 500,
    maxXp: 1000,
    category: 'Management',
    icon: <Sword className="w-4 h-4" />,
  },
]

export const initialArchived: ProgressItem[] = [
  {
    name: 'Old Website Project',
    progress: 100,
    level: 15,
    xp: 1000,
    maxXp: 1000,
    category: 'Completed',
    icon: <Archive className="w-4 h-4" />,
  },
  {
    name: 'Previous Marketing Campaign',
    progress: 100,
    level: 12,
    xp: 1000,
    maxXp: 1000,
    category: 'Completed',
    icon: <Archive className="w-4 h-4" />,
  },
]
