import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: true,
  sourcemap: false,
  loader: {
    '.js': 'jsx',
  },
})

