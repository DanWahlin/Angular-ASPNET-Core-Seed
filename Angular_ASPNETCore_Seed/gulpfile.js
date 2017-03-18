var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    sequence = require('run-sequence'),
    libPath = 'wwwroot/lib',
    nodeModulesPath = 'node_modules';

gulp.task('clean', function () {
  return del(libPath + '/**/*', { force: true });
});

gulp.task('copy:libs', function (done) {
    sequence('clean', 'copy:vendor', 'copy:rxjs', 'copy:angular', done);
});

gulp.task('copy:vendor', function() {
  return gulp.src([
      nodeModulesPath + '/core-js/client/**/*',
      nodeModulesPath + '/zone.js/dist/zone.js',
      nodeModulesPath + '/systemjs/dist/system-polyfills.js',
      nodeModulesPath + '/systemjs/dist/system.src.js'
    ])
    .pipe(gulp.dest(libPath));
});

gulp.task('copy:rxjs', function() {
  return gulp.src([
      nodeModulesPath + '/rxjs/**/*'
    ])
    .pipe(gulp.dest(libPath + '/rxjs'));
});

gulp.task('copy:angular', function() {
//   return gulp.src([
//       'node_modules/@angular/common/bundles/common.umd.js',
//       'node_modules/@angular/compiler/bundles/compiler.umd.js',
//       'node_modules/@angular/core/bundles/core.umd.js',
//       'node_modules/@angular/forms/bundles/forms.umd.js',
//       'node_modules/@angular/http/bundles/http.umd.js',      
//       'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
//       'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//       'node_modules/@angular/router/bundles/router.umd.js',
//     ])
    return gulp.src([nodeModulesPath + '/@angular/**/*']).pipe(gulp.dest(libPath + '/@angular'));
});

gulp.task('watch', function() {

    gulp.watch([
        jsPath + '/**/*.js', ['compressScripts']
    ]);

});

gulp.task('default', ['compressScripts', 'watch']);

