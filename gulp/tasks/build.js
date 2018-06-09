const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);

gulp.task('build', () => {
    runSequence(
        'html',
        'styles',
        'scripts',
        'images',
        'fonts'
    )
});