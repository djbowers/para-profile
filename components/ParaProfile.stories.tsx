import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ParaProfile } from './ParaProfile';
import {
  initialProjects,
  initialAreas,
  initialResources,
  initialArchived,
} from '@/data/exampleData';

const meta = {
  title: 'Components/ParaProfile',
  component: ParaProfile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    initialProjects: {
      control: 'object',
      description: 'Initial projects data',
    },
    initialAreas: {
      control: 'object',
      description: 'Initial areas data',
    },
    initialResources: {
      control: 'object',
      description: 'Initial resources data',
    },
    initialArchived: {
      control: 'object',
      description: 'Initial archived data',
    },
  },
} satisfies Meta<typeof ParaProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialProjects,
    initialAreas,
    initialResources,
    initialArchived,
  },
};

export const Empty: Story = {
  args: {
    initialProjects: [],
    initialAreas: [],
    initialResources: [],
    initialArchived: [],
  },
};

export const ProjectsOnly: Story = {
  args: {
    initialProjects,
    initialAreas: [],
    initialResources: [],
    initialArchived: [],
  },
};

export const AreasOnly: Story = {
  args: {
    initialProjects: [],
    initialAreas,
    initialResources: [],
    initialArchived: [],
  },
};

export const ResourcesOnly: Story = {
  args: {
    initialProjects: [],
    initialAreas: [],
    initialResources,
    initialArchived: [],
  },
};

export const ArchiveOnly: Story = {
  args: {
    initialProjects: [],
    initialAreas: [],
    initialResources: [],
    initialArchived,
  },
};

export const MinimalData: Story = {
  args: {
    initialProjects: [initialProjects[0]],
    initialAreas: [initialAreas[0]],
    initialResources: [initialResources[0]],
    initialArchived: [initialArchived[0]],
  },
};
