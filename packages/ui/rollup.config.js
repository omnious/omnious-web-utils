import linaria from 'linaria/rollup';
// import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
// import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: [
    '@emotion/styled',
    'linaria/react',
    'moment',
    'react',
    'react-collapse',
    'react-dates',
    'react-select',
    'styled-components'
  ],
  plugins: [
    // resolve({
    //   extensions: ['.js', '.jsx', '.ts', '.tsx']
    // }),
    // babel({
    //   extensions: ['.js', '.jsx', '.ts', '.tsx']
    // }),
    typescript(),
    linaria(),
    css({
      output: 'lib/style.css'
    })
  ]
};
