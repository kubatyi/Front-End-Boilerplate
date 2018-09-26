const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);
const config        = require('../config');


gulp.task('build', () => {
    config.setEnvironment('development');
    runSequence(
        'html',
        'styles',
        'scripts',
        'images',
        'fonts'
    );
    config.logEnvironment();
});

gulp.task('build:prod', () => {
    config.setEnvironment('production');
    runSequence(
        'html',
        'styles',
        'scripts',
        'images',
        'fonts'
    );
    config.logEnvironment();
});