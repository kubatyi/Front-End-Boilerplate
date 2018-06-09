const gulp          = require('gulp');
const config        = require('../config');
const browserSync   = require('browser-sync');

const uglify        = require('gulp-uglify');
const webpack       = require('webpack');
const webpackStream = require('webpack-stream');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');

gulp.task('scripts', () => {
    return gulp
        .src(config.paths.src.js)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(webpackStream({
            output: {
                filename: 'bundle.js',
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['env']
                        }
                    }
                ]
            }
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});