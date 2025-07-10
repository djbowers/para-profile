import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CharacterProfileHeader } from './CharacterProfileHeader';

const meta: Meta<typeof CharacterProfileHeader> = {
  title: 'Components/CharacterProfileHeader',
  component: CharacterProfileHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalLevel: {
      control: { type: 'number', min: 0, max: 1000 },
      description: 'Total level across all items',
    },
    avgProgress: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Average progress percentage',
    },
    activeItemsCount: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Number of active items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalLevel: 42,
    avgProgress: 67.5,
    activeItemsCount: 8,
  },
};

export const Beginner: Story = {
  args: {
    totalLevel: 5,
    avgProgress: 25,
    activeItemsCount: 2,
  },
};

export const Intermediate: Story = {
  args: {
    totalLevel: 25,
    avgProgress: 55,
    activeItemsCount: 5,
  },
};

export const Advanced: Story = {
  args: {
    totalLevel: 100,
    avgProgress: 85,
    activeItemsCount: 12,
  },
};

export const Expert: Story = {
  args: {
    totalLevel: 250,
    avgProgress: 92,
    activeItemsCount: 20,
  },
};

export const NoItems: Story = {
  args: {
    totalLevel: 0,
    avgProgress: 0,
    activeItemsCount: 0,
  },
};

export const SingleItem: Story = {
  args: {
    totalLevel: 3,
    avgProgress: 45,
    activeItemsCount: 1,
  },
};

export const HighProgress: Story = {
  args: {
    totalLevel: 60,
    avgProgress: 95,
    activeItemsCount: 6,
  },
};

export const LowProgress: Story = {
  args: {
    totalLevel: 30,
    avgProgress: 15,
    activeItemsCount: 10,
  },
};