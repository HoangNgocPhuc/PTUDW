// var sourcemaps = require('gulp-sourcemaps');/* gulpfile.js */
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');/* gulpfile.js */
var sass = require('gulp-sass');
// default task
gulp.task('styles', function () {
    gulp.src('admin/public/scss/style.scss')
    	.pipe(sourcemaps.init())
     	.pipe(sass().on('error', sass.logError))
     	.pipe(sourcemaps.write())
    	.pipe(gulp.dest('admin/public/css'))
});


//Watch task
gulp.task('default', ['styles'],function() {
    // gulp.watch('src/**/*.scss',['styles']);
    gulp.run('copy_vendor');
});

gulp.task('default', ['styles'],function() {
    gulp.watch('admin/public/scss/style.scss',['styles']);
});