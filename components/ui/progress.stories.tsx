import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Quarter: Story = {
  args: {
    value: 25,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-60 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    value: 40,
    className: 'h-1',
  },
};

export const Large: Story = {
  args: {
    value: 70,
    className: 'h-4',
  },
};

export const CustomWidth: Story = {
  args: {
    value: 80,
    className: 'w-32',
  },
};