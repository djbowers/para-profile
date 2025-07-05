export const getProgressColor = (progress: number): string => {
  if (progress >= 80) return 'bg-green-500'
  if (progress >= 60) return 'bg-yellow-500'
  if (progress >= 40) return 'bg-orange-500'
  return 'bg-red-500'
}

export const getLevelColor = (level: number): string => {
  if (level >= 10) return 'text-purple-400'
  if (level >= 7) return 'text-blue-400'
  if (level >= 4) return 'text-green-400'
  return 'text-gray-400'
}
