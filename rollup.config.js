import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default [
  {
    input: 'index.js',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      uglify({
        compress: {
          drop_console: true,
        },
      }),
    ],
    output: {
      file: 'dist/command-palette.min.js',
      sourcemap: true,
      name: 'CommandPalette',
      format: 'iife',
    }
  },
];