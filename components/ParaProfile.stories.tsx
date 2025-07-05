import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ParaProfile } from './ParaProfile'
import {
  initialProjects,
  initialAreas,
  initialResources,
  initialArchived,
} from '@/data/exampleData'

const meta = {
  component: ParaProfile,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    initialProjects,
    initialAreas,
    initialResources,
    initialArchived,
  },
} satisfies Meta<typeof ParaProfile>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
