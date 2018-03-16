import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';

export default [
  {
    input: 'index.js',
    plugins: [
      sass({
        options: {
          outputStyle: 'compressed',
          sourceMapContents: true,
          sourceMapEmbed: true,
          sourceMap: true,
          outFile: 'dist/command-palette.min.css',
        },
        output: 'dist/command-palette.min.css',
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      uglify({
        compress: {
          drop_console: false,
        },
      }),
    ],
    output: {
      file: 'dist/command-palette.min.js',
      sourcemap: true,
      name: 'CommandPalette',
      format: 'iife',
    },
    watch: {
      include: 'src/**'
    },
  },
];