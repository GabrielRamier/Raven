// Gulp task
//
// Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

//Watch task
gulp.task('default',function() {
     gulp.start('styles', 'imagemin', 'svgmin', 'scripts');
});

//styles
gulp.task('styles', function() {
     gulp.src('process/scss/main.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
     }))
     .pipe(concat('styles.css'))
     .pipe(minifycss())
     .pipe(gulp.dest('dist/css/'));
});

// Image compressor
gulp.task('imagemin',function() {
     gulp.src('process/img/*')
     .pipe(imagemin())
     .pipe(gulp.dest('dist/img/'));
});

gulp.task('svgmin',function() {
     gulp.src('process/img/svg/*.svg')
     .pipe(svgmin())
     .pipe(gulp.dest('dist/img/svg/'));
});

// Js compiler
gulp.task('scripts', function() {
     return gulp.src('process/js/*')
     .pipe(uglify())
     .pipe(concat('main.js'))
     .pipe(gulp.dest('dist/js/'));
});

//Watch task
gulp.task('watch',function() {
     gulp.watch('process/scss/**/*.scss',['styles']);
     gulp.watch('process/js/**/*.js',['scripts']);
     gulp.watch('process/img/*',['imagemin']);
     gulp.watch('process/img/svg/*',['svgmin']);
});
