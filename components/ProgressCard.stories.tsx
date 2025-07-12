import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  initialArchived,
  initialAreas,
  initialProjects,
  initialResources,
} from '@/data/exampleData';

import { ProgressCard } from './ProgressCard';

const meta: Meta<typeof ProgressCard> = {
  title: 'Components/ProgressCard',
  component: ProgressCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['projects', 'areas', 'resources', 'archive'],
    },
    draggedItem: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockHandlers = {
  onDragStart: () => {},
  onDragEnd: () => {},
  onDragOver: () => {},
  onDrop: () => {},
  onUpdate: () => {},
  onDelete: () => {},
  onMove: () => {},
};

export const ProjectCard: Story = {
  args: {
    item: initialProjects[0],
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const AreaCard: Story = {
  args: {
    item: initialAreas[0],
    type: 'areas',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const ResourceCard: Story = {
  args: {
    item: initialResources[0],
    type: 'resources',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const ArchivedCard: Story = {
  args: {
    item: initialArchived[0],
    type: 'archive',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const HighProgressCard: Story = {
  args: {
    item: {
      ...initialProjects[2], // Website Redesign with 90% progress
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const LowProgressCard: Story = {
  args: {
    item: {
      ...initialProjects[3], // Team Training with 30% progress
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const CompletedCard: Story = {
  args: {
    item: {
      name: 'Completed Project',
      progress: 100,
      level: 15,
      xp: 1000,
      maxXp: 1000,
      category: 'Development',
      icon: initialProjects[0].icon,
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const BeginnerCard: Story = {
  args: {
    item: {
      name: 'New Project',
      progress: 5,
      level: 1,
      xp: 50,
      maxXp: 1000,
      category: 'Development',
      icon: initialProjects[0].icon,
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const ExpertCard: Story = {
  args: {
    item: {
      name: 'Expert Level Project',
      progress: 85,
      level: 25,
      xp: 850,
      maxXp: 1000,
      category: 'Leadership',
      icon: initialProjects[0].icon,
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};

export const DraggedCard: Story = {
  args: {
    item: initialProjects[0],
    type: 'projects',
    index: 0,
    draggedItem: {
      item: initialProjects[0],
      type: 'projects',
      index: 0,
    },
    ...mockHandlers,
  },
};

export const LongNameCard: Story = {
  args: {
    item: {
      name: 'This is a very long project name that should test text wrapping and layout',
      progress: 65,
      level: 8,
      xp: 650,
      maxXp: 1000,
      category: 'Development',
      icon: initialProjects[0].icon,
    },
    type: 'projects',
    index: 0,
    draggedItem: null,
    ...mockHandlers,
  },
};
