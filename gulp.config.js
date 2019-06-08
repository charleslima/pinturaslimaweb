'use strict';

const config = {
  src: {
    root: './_src',

    css: './_src/css',
    js: './_src/js',
    templates: './_src/templates'
  },

  dist: {
    root: './dist',

    css: './dist/css',
    js: './dist/js',
    templates: './dist'
  },

  nunjucks: {
    relativePath: '/dist/templates'
  },

  connect: {
    livereload: true,
    root: ['.'],
    host: 'localhost',
    port: 8001,
    name: 'Pinturas Lima'
  }
};

export default config;
