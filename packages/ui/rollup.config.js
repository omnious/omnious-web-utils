import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: [
    'moment',
    'react',
    'react-collapse',
    'react-dates',
    'react-select',
    'styled-components'
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ]
};
