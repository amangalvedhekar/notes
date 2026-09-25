/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { fileURLToPath } from 'node:url';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/aws-amplify-cognito-web',
  define: {
    global: 'window',
    process: {
      env: {},
    },
    'process.env': {},
  },
  resolve: {
    alias: [
      {
        find: /^react-native\/Libraries\/Utilities\/codegenNativeComponent$/,
        replacement: fileURLToPath(
          new URL('./src/codegenNativeComponent.web.ts', import.meta.url)
        ),
      },
      { find: 'react-native', replacement: 'react-native-web' },
      { find: 'react-native-svg', replacement: 'react-native-svg-web' },
      {
        find: '@react-native/assets-registry/registry',
        replacement: 'react-native-web/dist/modules/AssetRegistry/index',
      },
    ],
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: '@notes/aws-amplify-cognito-web',
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    server: {
      deps: {
        inline: [
          /^react-native/,
          /^@react-native/,
          /^tamagui$/,
          /^@tamagui/,
        ],
      },
    },
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
