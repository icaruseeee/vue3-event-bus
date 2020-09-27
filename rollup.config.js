import path from 'path'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/index.ts',
        output: {
            file: path.resolve(__dirname, './dist-built/bundle.js'),
            format: 'esm',
        },

        plugins: [
            ts({
                tsconfig: path.resolve(__dirname, 'tsconfig.json'),
            }),
            terser({
                compress: {
                    ecma: 2015,
                },
            }),
        ],
    },

    {
        input: 'types/index.d.ts',
        output: {
            file: path.resolve(__dirname, './dist-built/bundle.d.ts'),
            format: 'es',
        },

        plugins: [dts()],
    },
]