import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    asChild: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>📊</span>
        Badge
      </>
    ),
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a longer badge text',
  },
};

export const Number: Story = {
  args: {
    variant: 'secondary',
    children: '42',
  },
};

export const Status: Story = {
  args: {
    variant: 'outline',
    children: 'Active',
  },
};
