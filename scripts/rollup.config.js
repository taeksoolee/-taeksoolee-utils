import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

// import minify from 'rollup-plugin-babel-minify';

const format = 'cjs';
// umd, cjs: commonJS, es : ES Module

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format,
    // umd, cjs, es
    exports: 'auto',
    plugins: [
      babel(),
      commonjs(),
      terser(),
    ]
  },
};