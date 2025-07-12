import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    globals: true,
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://mock-supabase.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'mock-anon-key',
    },
    coverage: {
      exclude: [
        '**/*.config.*',
        '**/*.config.js',
        '**/*.config.ts',
        '**/*.config.mjs',
        '**/postcss.config.*',
        '**/tailwind.config.*',
        '**/next.config.*',
        '**/vitest.config.*',
        '**/components.json',
        '**/package.json',
        '**/package-lock.json',
        '**/tsconfig.json',
        '**/eslint.config.*',
        '**/.storybook/**',
        '**/node_modules/**',
        '**/coverage/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/*.stories.*',
        '**/*.test.*',
        '**/*.spec.*',
        '**/vitest.setup.*',
        '**/next-env.d.ts',
        '**/vitest.shims.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
