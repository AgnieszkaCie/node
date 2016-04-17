var gulp = require('gulp');
var flatten = require('gulp-flatten');
var conf = require('./conf.js');


gulp.task('copyCats' , function(){
  return gulp.src(
      conf.path.src + '/app/**/*cat*.jpg'
  )
    .pipe(flatten())
    .pipe(gulp.dest(conf.paths.dist + '/cats/'));

});
