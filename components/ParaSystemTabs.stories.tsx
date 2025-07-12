import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ParaSystemTabs } from './ParaSystemTabs';
import { initialProjects, initialAreas, initialResources, initialArchived } from '@/data/exampleData';
import type { ProgressItem } from '@/types/progress';

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

// Mock hooks for Storybook
const createMockHook = (items: ProgressItem[]) => ({
  items,
  loading: false,
  error: null,
  addItem: async (item: Omit<ProgressItem, 'icon' | 'id'>) => {
    console.log('Adding item:', item);
    return { ...item, id: Math.random().toString() } as ProgressItem;
  },
  updateItem: async (id: string, updates: Partial<Omit<ProgressItem, 'icon' | 'id'>>) => {
    console.log('Updating item:', id, updates);
    return items.find(item => item.id === id)!;
  },
  removeItem: async (id: string) => {
    console.log('Removing item:', id);
  },
  moveItem: async (id: string, newType: 'project' | 'area' | 'resource' | 'archived') => {
    console.log('Moving item:', id, 'to', newType);
    return items.find(item => item.id === id)!;
  },
  refetch: () => {
    console.log('Refetching data');
  },
});

const mockHandlers = {
  onTabChange: (tab: string) => console.log('Tab changed to:', tab),
  projectsHook: createMockHook(initialProjects),
  areasHook: createMockHook(initialAreas),
  resourcesHook: createMockHook(initialResources),
  archivedHook: createMockHook(initialArchived),
};

export const Default: Story = {
  args: {
    selectedTab: 'projects',
    ...mockHandlers,
  },
};

export const ProjectsTab: Story = {
  args: {
    selectedTab: 'projects',
    ...mockHandlers,
  },
};

export const AreasTab: Story = {
  args: {
    selectedTab: 'areas',
    ...mockHandlers,
  },
};

export const ResourcesTab: Story = {
  args: {
    selectedTab: 'resources',
    ...mockHandlers,
  },
};

export const ArchiveTab: Story = {
  args: {
    selectedTab: 'archive',
    ...mockHandlers,
  },
};

export const EmptyState: Story = {
  args: {
    selectedTab: 'projects',
    onTabChange: (tab: string) => console.log('Tab changed to:', tab),
    projectsHook: createMockHook([]),
    areasHook: createMockHook([]),
    resourcesHook: createMockHook([]),
    archivedHook: createMockHook([]),
  },
};

export const ProjectsOnlyData: Story = {
  args: {
    selectedTab: 'projects',
    onTabChange: (tab: string) => console.log('Tab changed to:', tab),
    projectsHook: createMockHook(initialProjects),
    areasHook: createMockHook([]),
    resourcesHook: createMockHook([]),
    archivedHook: createMockHook([]),
  },
};

export const SingleItemPerTab: Story = {
  args: {
    selectedTab: 'projects',
    onTabChange: (tab: string) => console.log('Tab changed to:', tab),
    projectsHook: createMockHook([initialProjects[0]]),
    areasHook: createMockHook([initialAreas[0]]),
    resourcesHook: createMockHook([initialResources[0]]),
    archivedHook: createMockHook([initialArchived[0]]),
  },
};

export const ManyItemsPerTab: Story = {
  args: {
    selectedTab: 'projects',
    onTabChange: (tab: string) => console.log('Tab changed to:', tab),
    projectsHook: createMockHook([...initialProjects, ...initialProjects, ...initialProjects]),
    areasHook: createMockHook([...initialAreas, ...initialAreas]),
    resourcesHook: createMockHook([...initialResources, ...initialResources]),
    archivedHook: createMockHook([...initialArchived, ...initialArchived]),
  },
};