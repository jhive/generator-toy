var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  mocha = require('gulp-mocha'),
  clear = require('clear');

gulp.task('clear', function(){
  clear();
});

gulp.task('jshint', function(){
  gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['jshint'], function(){
  gulp.src('src/**/*.spec.js')
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function() { });
});

//Need to catch errors so mocha doesn't blow up the watcher
gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['clear', 'test']);
});

gulp.task('default', ['watch']);
