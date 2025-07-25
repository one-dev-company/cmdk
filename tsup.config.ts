import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: false,
  sourcemap: true,
  splitting: false,
})

