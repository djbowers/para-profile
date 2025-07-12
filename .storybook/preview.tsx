import type { Preview } from '@storybook/nextjs-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { MockedAuthProvider } from '@/mocks/MockAuthProvider';

import '../app/globals.css';
import { handlers } from '../mocks/handlers';

// Initialize MSW
initialize({
  onUnhandledRequest: 'warn',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    msw: {
      handlers: handlers,
    },

    // Set mock environment variables for Storybook
    nextjs: {
      appDirectory: true,
    },
  },

  loaders: [mswLoader],

  // Set up environment variables for Storybook
  beforeEach: () => {
    // Set mock Supabase environment variables
    if (typeof window !== 'undefined') {
      process.env.NEXT_PUBLIC_SUPABASE_URL =
        'https://mock-supabase.supabase.co';
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'mock-anon-key';
      process.env.STORYBOOK = 'true';
    }
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
    (Story) => {
      return (
        <MockedAuthProvider>
          <Story />
        </MockedAuthProvider>
      );
    },
  ],
};

export default preview;
