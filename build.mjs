import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    format: 'iife',
    bundle: true,
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));
