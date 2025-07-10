export const getProgressColor = (progress: number): string => {
  if (progress >= 80) return 'progress-excellent';
  if (progress >= 60) return 'progress-good';
  if (progress >= 40) return 'progress-fair';
  return 'progress-poor';
};

export const getLevelColor = (level: number): string => {
  if (level >= 10) return 'level-expert';
  if (level >= 7) return 'level-advanced';
  if (level >= 4) return 'level-intermediate';
  return 'level-beginner';
};
