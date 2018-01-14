var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var tsify = require('tsify');

gulp.task('buildJS', function () {
    var bundle = browserify({
            entries: "src/app.js",
            extensions: [".js", ".ts"]
    })
        .plugin(tsify, {
        noImplicitAny: true,
        target: 'es6'
    })
        .transform("babelify", { 
            presets: ["babel-preset-env"],
            extensions: [".js", ".ts"]
        })
        .on('error', function (e) {
            console.error(e.toString());
        })
        .bundle();

    return bundle
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("build"));
});

gulp.task('connect', function () {
    return connect.server({host: "localhost", root: "build", livereload: true});
});

gulp.task('default', ['buildJS', 'connect']);
gulp.watch(['src/*.js',"src/*.ts"], ['buildJS']);
