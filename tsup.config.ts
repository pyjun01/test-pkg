import { defineConfig, Options } from 'tsup'

import fs from 'fs'

export default defineConfig(options => {
  const commonOptions: Partial<Options> = {
    entry: ['src/index.ts'],
    sourcemap: true,
    ...options
  }

  return [
    // Standard ESM, embedded `process.env.NODE_ENV` checks
    {
      ...commonOptions,
      format: ['esm'],
      outExtension: () => ({ js: '.mjs' }),
      dts: true,
      clean: true,
    },
    // Browser-ready ESM, production + minified
    {
      ...commonOptions,
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      format: ['esm'],
      outExtension: () => ({ js: '.mjs' }),
      minify: true
    },
    {
      ...commonOptions,
      format: 'cjs',
      outDir: './dist/cjs/',
      outExtension: () => ({ js: '.cjs' })
    }
  ]
})