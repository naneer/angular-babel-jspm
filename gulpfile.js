var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  
  gulp.src(['./src/*.js'])
    .pipe(gulp.dest('./dist'));

  gulp.src(['./src/jspm_packages/*.js', './src/jspm_packages/*.map'])
    .pipe(gulp.dest('./dist/jspm_packages'));
  
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['build.js'], {read: false, cwd: './dist'});
  
  return target.pipe(inject(sources, {addRootSlash: false}))
    .pipe(gulp.dest('./dist'));
});