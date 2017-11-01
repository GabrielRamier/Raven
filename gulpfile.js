var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

//styles
gulp.task('styles', function() {
     gulp.src('process/scss/main.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(concat('styles.css'))
     .pipe(gulp.dest('dist/css/'));
});

// Prefixer
gulp.task('prefix',function() {
     gulp.src('dist/css/styles.css')
     .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
     }))
     .pipe(gulp.dest('dist/css/'))
});

// Image compressor
gulp.task('image',function() {
     gulp.src('process/img/*')
     .pipe(imagemin())
     .pipe(gulp.dest('dist/img/'));
});

// Js compiler
gulp.task('scripts', function() {
  return gulp.src('process/js/*')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js/'));
});

//Watch task
gulp.task('watch',function() {
     gulp.watch('process/scss/**/*.scss',['styles']);
     gulp.watch('process/js/*.js',['scripts']);
});
