var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  uglifycss = require('gulp-uglifycss'),
  watch = require('gulp-watch'),
  clean = require('gulp-clean'),
  browserSync = require('browser-sync'),
  nunjucksRender = require('gulp-nunjucks-render');

gulp.task('img', function () {
  gulp.src([
    './public/img/**/*'
  ]).pipe(gulp.dest('./dist/public/img'));
});

gulp.task('jspub', function () {
  gulp.src([
    './public/js/html.min.js',
    './public/js/app.js'
  ]).pipe(gulp.dest('./dist/public/js'));
})

gulp.task('less', function () {
  gulp.src([
      './bower_components/normalize-css/normalize.css',
      './bower_components/swiper/dist/css/swiper.min.css',
      './public/css/**/*.less'
    ]).pipe(less())
    .pipe(autoprefixer({
      browsers: ['defaults', 'not ie < 8'],
      cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(rename({
      suffix: '.min'
    })) //rename压缩后的文件名
    // .pipe(uglifycss())    //压缩
    .pipe(gulp.dest('./dist/public'));
});

//压缩,合并 js
gulp.task('js', function () {
  return gulp.src([
      './public/js/es5-shim.min.js',
      './public/js/es5-sham.min.js',
      './public/js/es6-shim.min.js',
      './public/js/es6-sham.min.js',
      './public/js/es7-shim.js',
      './bower_components/jquery/jquery.js',
      './bower_components/lodash/dist/lodash.js',
      './bower_components/velocity/velocity.min.js',
      './bower_components/swiper/dist/idangerous.swiper.js'
    ])
    .pipe(concat('main.js')) //合并所有js到main.js
    // .pipe(gulp.dest('./'))       //输出到文件夹
    .pipe(rename({
      suffix: '.min'
    })) //rename压缩后的文件名
    // .pipe(uglify())    //压缩
    .pipe(gulp.dest('./dist/public')); //输出
});

gulp.task('html', () =>
  gulp.src('./views/containers/*.html')
  .pipe(nunjucksRender({
    path: ['views/']
  }))
  .pipe(gulp.dest('./dist'))
);

gulp.task('clean', function() {
  gulp.src('./dist').pipe(clean())
})

gulp.task('server', ['default'], function() {

  browserSync.init({
      server: "./dist"
  });
  gulp.watch(['./views/**/*.html'], ['html']).on('change', browserSync.reload)
  gulp.watch(['./public/css/**/*.css', './public/css/**/*.less'], ['less']).on('change', browserSync.reload)
});

gulp.task('default', ['js', 'less', 'html', 'img', 'jspub'])