import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">
        Name
        <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search">
        <span>🔍</span>
        Search
      </Label>
      <Input id="search" type="search" placeholder="Search..." />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2 group" data-disabled="true">
      <Label htmlFor="disabled">Disabled Field</Label>
      <Input id="disabled" disabled placeholder="Disabled input" />
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'This is a longer label that might wrap to multiple lines',
  },
};
