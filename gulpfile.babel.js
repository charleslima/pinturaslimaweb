'use strict';

import config from './gulp.config';

import gulp from 'gulp';
import plumber from 'gulp-plumber';

import connect from 'gulp-connect';

import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';

import nunjucks from 'gulp-nunjucks-render';
import htmlmin from 'gulp-htmlmin';

import postcss from 'gulp-postcss';
import precss from 'precss';
import cssnano from 'cssnano';
import rucksack from 'rucksack-css';
import postcssPresetEnv from 'postcss-preset-env';
import postcssCustomSelectors from 'postcss-custom-selectors';
import postcssCustomProperties from 'postcss-custom-properties';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// tasks
gulp.task('css', () => {
  const processors = [precss(), postcssPresetEnv(), rucksack(), postcssCustomSelectors(), postcssCustomProperties(), cssnano()];

  return gulp
    .src(`${config.src.css}/*.css`)
    .pipe(plumber())
    .pipe(postcss(processors))
    .on('error', handleError)
    .pipe(gulp.dest(config.dist.css))
    .pipe(connect.reload());
});

gulp.task('templates:nunjucks', () => {
  return gulp
    .src(`${config.src.templates}/**/*.nunjucks`)
    .pipe(
      nunjucks({
        path: config.src.templates,
        data: {
          relativePath: `http://${config.connect.host}:${config.connect.port}${config.nunjucks.relativePath}`
        }
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuote: true
      })
    )
    .pipe(gulp.dest(config.dist.templates));
});

// default task
gulp.task('default', () => {
  // create local server
  connect.server(config.connect);

  // watch all css files
  gulp.watch(`${config.src.css}/**/*.css`, gulp.series('css'));

  // watch all nunjucks files
  gulp.watch(`${config.src.templates}/**/*.+(html|nunjucks)`, gulp.series('templates:nunjucks'));
});
