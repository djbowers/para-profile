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

import type React from 'react';

export const getIconByCategory = (category: string): React.ReactNode => {
  const iconMap: { [key: string]: React.ReactNode } = {
    Development: <Zap className="w-4 h-4" />,
    Marketing: <Target className="w-4 h-4" />,
    Design: <Star className="w-4 h-4" />,
    Leadership: <Shield className="w-4 h-4" />,
    Personal: <Heart className="w-4 h-4" />,
    Finance: <Trophy className="w-4 h-4" />,
    Career: <MapPin className="w-4 h-4" />,
    Education: <Brain className="w-4 h-4" />,
    Technology: <Zap className="w-4 h-4" />,
    Creative: <Star className="w-4 h-4" />,
    Management: <Sword className="w-4 h-4" />,
    Completed: <Archive className="w-4 h-4" />,
  };
  return iconMap[category] || <Star className="w-4 h-4" />;
};
