var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var prettify = require('gulp-prettify');
const autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var runSequence = require('run-sequence');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
//var removeHtmlComments = require('gulp-remove-html-comments');

gulp.task('sass', function() {
    return gulp.src('web-dev/scss/*.scss')
        .pipe(plumber({ errorHandler: notify.onError("SCSS Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        // .pipe(recess({
        //     noOverqualifying: false
        // }))
        // .pipe(recess.reporter())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('web/css'))
		.pipe(sass({includePaths: ['web-dev/scss/_partials']}))
		.pipe(sass({includePaths: ['web-dev/scss/_utilities']}))
        .pipe(browserSync.stream())
});


gulp.task('pug', function() {
    return gulp.src('web-dev/pug/*.pug')
        .pipe(plumber({ errorHandler: notify.onError("PUG Error: <%= error.message %>") }))
        .pipe(pug())
        .pipe(prettify({
            indent_size: 2
        }))
        .pipe(gulp.dest('web/templates'))
        .pipe(browserSync.stream())
});


gulp.task('browserSync', function() {
    browserSync.init({
        injectChanges: true,
        server: {
            baseDir: 'web',
            directory: true
        },
        ghostMode: false,
    })
})



gulp.task('watch', ['browserSync', 'sass', 'pug'], function() {
    gulp.watch('web-dev/**/*.scss', ['sass']);
    gulp.watch('web-dev/**/*.pug', ['pug']);
    gulp.watch('web/*.html', function(){
        setTimeout(function(){
            browserSync.reload
        },1000);
    });
    gulp.watch('web/css/*.css', function(){
        setTimeout(function(){
            browserSync.reload
        },1000);
    });
});


gulp.task('clean:web', function() {
    return del.sync('web');
})


gulp.task('default', function(callback) {
    runSequence(['sass', 'pug', 'browserSync', 'watch'],
        callback
    )
})
