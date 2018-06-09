const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const config        = require('../config');

gulp.task('server', function () {
    browserSync(config.server);
});