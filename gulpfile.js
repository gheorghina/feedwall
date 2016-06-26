var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var babel = require('gulp-babel');

gulp.task("gulp-log", function () {
    console.log("first gulp task");
})

gulp.task('sass', function () {
    return gulp.src('public/assets/sass/modal.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('compress', function () {
    gulp.src('app/models/*.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/models'))
});

gulp.task('js-transpile', function () {
    return gulp.src('app/models/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/models/transpiled'));
});

