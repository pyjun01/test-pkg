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
      clean: true,
      onSuccess() {
        // Support Webpack 4 by pointing `"module"` to a file with a `.js` extension
        return fs.promises.rename('dist/index.mjs', 'dist/index.legacy-esm.js')
      }
    },
    // Browser-ready ESM, production + minified
    {
      ...commonOptions,
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      format: ['esm'],
      outExtension: () => ({ js: '.js' }),
      minify: true,
      dts: true,
    },
    {
      ...commonOptions,
      format: 'cjs',
      outDir: './dist/cjs/',
      outExtension: () => ({ js: '.cjs' })
    }
  ]
})