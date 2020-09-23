import path from 'path'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
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
}