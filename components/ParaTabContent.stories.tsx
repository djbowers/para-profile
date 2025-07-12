import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Archive, BookOpen, MapPin, Target } from 'lucide-react';

import {
  initialArchived,
  initialAreas,
  initialProjects,
  initialResources,
} from '@/data/exampleData';

import { ParaTabContent } from './ParaTabContent';

const meta: Meta<typeof ParaTabContent> = {
  title: 'Components/ParaTabContent',
  component: ParaTabContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['projects', 'areas', 'resources', 'archive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockHandlers = {
  onItemsChange: (items: unknown[]) => console.log('Items changed:', items),
  onAdd: (newItem: unknown) => console.log('Adding item:', newItem),
  onDragStateChange: (draggedItem: unknown, dragOverType: unknown) =>
    console.log('Drag state changed:', draggedItem, dragOverType),
  onMoveItem: (fromType: string, fromIndex: number, toType: string) =>
    console.log('Moving item:', fromType, fromIndex, toType),
};

export const ProjectsContent: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: initialProjects,
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const AreasContent: Story = {
  args: {
    value: 'areas',
    title: 'Life Areas',
    description: 'Long-term responsibilities to manage over time',
    icon: MapPin,
    iconColor: 'text-primary',
    borderColor: 'border-primary bg-primary',
    items: initialAreas,
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const ResourcesContent: Story = {
  args: {
    value: 'resources',
    title: 'Resources',
    description: 'Topics or interests that may be useful in the future',
    icon: BookOpen,
    iconColor: 'text-chart-3',
    borderColor: 'border-chart-3 bg-chart-3',
    items: initialResources,
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const ArchiveContent: Story = {
  args: {
    value: 'archive',
    title: 'Archive',
    description: 'Inactive items from the other three categories',
    icon: Archive,
    iconColor: 'text-muted-foreground',
    borderColor: 'border-muted-foreground bg-muted-foreground',
    items: initialArchived,
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const EmptyContent: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: [],
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const SingleItemContent: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: [initialProjects[0]],
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const ManyItemsContent: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: [...initialProjects, ...initialProjects, ...initialProjects],
    draggedItem: null,
    dragOverType: null,
    ...mockHandlers,
  },
};

export const DragOverState: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: initialProjects,
    draggedItem: {
      item: initialProjects[0],
      type: 'areas',
      index: 0,
    },
    dragOverType: 'projects',
    ...mockHandlers,
  },
};

export const WithDraggedItem: Story = {
  args: {
    value: 'projects',
    title: 'Active Projects',
    description: 'Short-term efforts you&apos;re working on now',
    icon: Target,
    iconColor: 'text-status-positive',
    borderColor: 'border-status-positive bg-status-positive',
    items: initialProjects,
    draggedItem: {
      item: initialProjects[0],
      type: 'projects',
      index: 0,
    },
    dragOverType: null,
    ...mockHandlers,
  },
};
