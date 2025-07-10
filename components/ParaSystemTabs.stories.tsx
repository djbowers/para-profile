import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ParaSystemTabs } from './ParaSystemTabs';
import { initialProjects, initialAreas, initialResources, initialArchived } from '@/data/exampleData';

const meta: Meta<typeof ParaSystemTabs> = {
  title: 'Components/ParaSystemTabs',
  component: ParaSystemTabs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedTab: {
      control: 'select',
      options: ['projects', 'areas', 'resources', 'archive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockHandlers = {
  onTabChange: (tab: string) => console.log('Tab changed to:', tab),
  onProjectsChange: (projects: unknown[]) => console.log('Projects changed:', projects),
  onAreasChange: (areas: unknown[]) => console.log('Areas changed:', areas),
  onResourcesChange: (resources: unknown[]) => console.log('Resources changed:', resources),
  onArchivedChange: (archived: unknown[]) => console.log('Archived changed:', archived),
};

export const Default: Story = {
  args: {
    selectedTab: 'projects',
    projects: initialProjects,
    areas: initialAreas,
    resources: initialResources,
    archived: initialArchived,
    ...mockHandlers,
  },
};

export const ProjectsTab: Story = {
  args: {
    selectedTab: 'projects',
    projects: initialProjects,
    areas: initialAreas,
    resources: initialResources,
    archived: initialArchived,
    ...mockHandlers,
  },
};

export const AreasTab: Story = {
  args: {
    selectedTab: 'areas',
    projects: initialProjects,
    areas: initialAreas,
    resources: initialResources,
    archived: initialArchived,
    ...mockHandlers,
  },
};

export const ResourcesTab: Story = {
  args: {
    selectedTab: 'resources',
    projects: initialProjects,
    areas: initialAreas,
    resources: initialResources,
    archived: initialArchived,
    ...mockHandlers,
  },
};

export const ArchiveTab: Story = {
  args: {
    selectedTab: 'archive',
    projects: initialProjects,
    areas: initialAreas,
    resources: initialResources,
    archived: initialArchived,
    ...mockHandlers,
  },
};

export const EmptyState: Story = {
  args: {
    selectedTab: 'projects',
    projects: [],
    areas: [],
    resources: [],
    archived: [],
    ...mockHandlers,
  },
};

export const ProjectsOnlyData: Story = {
  args: {
    selectedTab: 'projects',
    projects: initialProjects,
    areas: [],
    resources: [],
    archived: [],
    ...mockHandlers,
  },
};

export const SingleItemPerTab: Story = {
  args: {
    selectedTab: 'projects',
    projects: [initialProjects[0]],
    areas: [initialAreas[0]],
    resources: [initialResources[0]],
    archived: [initialArchived[0]],
    ...mockHandlers,
  },
};

export const ManyItemsPerTab: Story = {
  args: {
    selectedTab: 'projects',
    projects: [...initialProjects, ...initialProjects, ...initialProjects],
    areas: [...initialAreas, ...initialAreas],
    resources: [...initialResources, ...initialResources],
    archived: [...initialArchived, ...initialArchived],
    ...mockHandlers,
  },
};