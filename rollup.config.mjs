import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        jsx: 'react-jsx',
      }),
      postcss(),
      terser(),
    ],
    external: ['react', 'react-dom', 'next', 'styled-components'],
    globals: { 'styled-components': 'styled' },
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
