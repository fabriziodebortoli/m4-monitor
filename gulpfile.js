/* eslint-disable */
var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename');

const rootFolder = path.join(__dirname);

gulp.task('copy', function() {
  return gulp.src(`${rootFolder}/docs/index.html`)
      .pipe(rename('404.html'))
      .pipe(gulp.dest(`${rootFolder}/docs/`));
});