import { ParaProfile } from '@/components/ParaProfile'
import {
  initialProjects,
  initialAreas,
  initialResources,
  initialArchived,
} from '@/data/exampleData'

export default function Page() {
  return (
    <ParaProfile
      initialProjects={initialProjects}
      initialAreas={initialAreas}
      initialResources={initialResources}
      initialArchived={initialArchived}
    />
  )
}
