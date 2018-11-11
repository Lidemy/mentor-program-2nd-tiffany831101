// 先定義好需要的模塊
var gulp = require('gulp');
// 轉換成css
var gulpSass = require('gulp-sass');
// 壓縮js
var gulpUglify = require('gulp-uglify');
// 轉換成es5語法
var gulpBabel = require('gulp-babel');
// 加上後墜名
var rename = require("gulp-rename");
// 清空資料夾
var clean = require('gulp-clean');

gulp.task('script', ['clean'], () => {
    return gulp.src('script.js')
        // 轉換成es5語法
        .pipe(gulpBabel({
            "presets": ["@babel/preset-env"]
        }))
        // 放進資料夾中
        .pipe(gulp.dest('dist'))
        // 壓縮
        .pipe(gulpUglify())
        // 把名字加上.min
        .pipe(rename({
            suffix: '.min'
        }))
        // 放回到資料夾中
        .pipe(gulp.dest('dist'));
});

gulp.task('style', ['clean'], () => {
    return gulp.src('style.scss')
        //轉換成css
        .pipe(gulpSass())
        // 放進資料夾中
        .pipe(gulp.dest('dist'))
        // 壓縮css
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        // 改名
        .pipe(rename({
            suffix: '.min'
        }))
        // 放進資料夾中
        .pipe(gulp.dest('dist'));
});

// 清空資料夾
gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('default', ['script', 'style']);