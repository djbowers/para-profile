import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    globals: true,
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
})
