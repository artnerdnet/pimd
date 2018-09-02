const gulp = require('gulp')
const connect = require('gulp-connect')
const deploy = require('gh-pages');

gulp.task('connect', function () {
  connect.server()
})
gulp.task('default', ['connect'])

var bro = require('gulp-bro')
gulp.task('build', () =>
  gulp.src('js/script.js')
    .pipe(bro())
    .pipe(gulp.dest('js_dist'))
)

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.watch('js/*.js', ['build'])
