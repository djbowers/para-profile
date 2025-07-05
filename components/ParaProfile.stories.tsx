import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ParaProfile } from './ParaProfile'

const meta = {
  component: ParaProfile,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ParaProfile>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
