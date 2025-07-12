import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AddNewItemDialog } from './AddNewItemDialog';

const meta: Meta<typeof AddNewItemDialog> = {
  title: 'Components/AddNewItemDialog',
  component: AddNewItemDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['projects', 'areas', 'resources', 'archive'],
      description: 'Type of item to add',
    },
    onAdd: {
      action: 'onAdd',
      description: 'Callback when adding new item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectDialog: Story = {
  args: {
    type: 'projects',
    onAdd: (type, newItem) => {
      console.log('Adding project:', type, newItem);
    },
  },
};

export const AreaDialog: Story = {
  args: {
    type: 'areas',
    onAdd: (type, newItem) => {
      console.log('Adding area:', type, newItem);
    },
  },
};

export const ResourceDialog: Story = {
  args: {
    type: 'resources',
    onAdd: (type, newItem) => {
      console.log('Adding resource:', type, newItem);
    },
  },
};

export const ArchiveDialog: Story = {
  args: {
    type: 'archive',
    onAdd: (type, newItem) => {
      console.log('Adding archive:', type, newItem);
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    type: 'projects',
    onAdd: (type, newItem) => {
      alert(`Added ${type}: ${JSON.stringify(newItem, null, 2)}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click the button to open the dialog and try adding a new item. The form will show an alert with the data when submitted.',
      },
    },
  },
};
