import type { Preview } from '@storybook/nextjs-vite';

import '@/app/globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MockedAuthProvider } from '@/mocks/MockAuthProvider';
import { handlers } from '@/mocks/handlers';

import { initialize, mswLoader } from './decorators/mswLoader';

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
