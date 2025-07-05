import type { ProgressItem } from '@/types/progress'

export const getDataByType = (
  type: string,
  projects: ProgressItem[],
  areas: ProgressItem[],
  resources: ProgressItem[],
  archived: ProgressItem[]
): ProgressItem[] => {
  switch (type) {
    case 'projects':
      return projects
    case 'areas':
      return areas
    case 'resources':
      return resources
    case 'archive':
      return archived
    default:
      return []
  }
}

export const setDataByType = (
  type: string,
  data: ProgressItem[],
  onProjectsChange: (projects: ProgressItem[]) => void,
  onAreasChange: (areas: ProgressItem[]) => void,
  onResourcesChange: (resources: ProgressItem[]) => void,
  onArchivedChange: (archived: ProgressItem[]) => void
): void => {
  switch (type) {
    case 'projects':
      onProjectsChange(data)
      break
    case 'areas':
      onAreasChange(data)
      break
    case 'resources':
      onResourcesChange(data)
      break
    case 'archive':
      onArchivedChange(data)
      break
  }
}
