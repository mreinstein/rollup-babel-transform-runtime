import babel    from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';


export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        sourcemap: false
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**', // only transpile our source code
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: 'defaults, ie >= 11'
                    },
                ],
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        corejs: 3,
                        helpers: true,
                        regenerator: true
                    }
                ]
            ],
        })
    ]
}
