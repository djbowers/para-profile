import { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  emptyHandlers,
  errorHandlers,
  loadingHandlers,
  minimalHandlers,
} from '../mocks/storyHandlers';
import { ParaProfile } from './ParaProfile';

const meta = {
  title: 'Components/ParaProfile',
  component: ParaProfile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParaProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story with full mock data (from MSW handlers)
export const Default: Story = {};

// Story with empty data
export const Empty: Story = {
  parameters: {
    msw: {
      handlers: emptyHandlers,
    },
  },
};

// Loading state story
export const Loading: Story = {
  parameters: {
    msw: {
      handlers: loadingHandlers,
    },
  },
};

// Error state story
export const Error: Story = {
  parameters: {
    msw: {
      handlers: errorHandlers,
    },
  },
};

// Minimal data story (one item per category)
export const Minimal: Story = {
  parameters: {
    msw: {
      handlers: minimalHandlers,
    },
  },
};
