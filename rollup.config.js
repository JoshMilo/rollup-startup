
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/index.ts',
  format: 'cjs',
  dest: 'build/bundle.js',
  plugins: [
    typescript()
  ]
};