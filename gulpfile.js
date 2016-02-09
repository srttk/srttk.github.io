var gulp = require('gulp');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;



 gulp.task('index', function(){
     return gulp.src('./index.html')
         .pipe(inject(
             gulp.src(['./js/*.js'],
                 {read: false}), {relative: true}))
         .pipe(gulp.dest('./'))
         .pipe(inject(
             gulp.src(['./css/*.css'],
             {read: false}), {relative: true}))
         .pipe(gulp.dest('./'));
 });


/////////////////////////////////////

gulp.task('server', function(){
 connect.server({
     livereload: true  
    
});

 });

gulp.task('html', function() {
  gulp.src('./*.html')
      .pipe(connect.reload());

 });

gulp.task('script',function(){
    gulp.src('./js/*.js')
      .pipe(connect.reload());
});

 gulp.task('sass', function() {
   gulp.src('./scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
     .pipe(autoprefixer())
      .pipe(gulp.dest('css'))
    .pipe(connect.reload());

 });

 gulp.task('watch', function() {
   gulp.watch(['./*.html'],['html']);
   gulp.watch(['./js/*.js'],['script']);
   gulp.watch(['./scss/*.scss'],['sass']);

 });

 // Wiredep
gulp.task('test',function(){
  console.log(wiredep().js);
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});


gulp.task('bower-js', function() {

  return gulp.src(wiredep().js)

    .pipe(gulp.dest('js/vendor'));

});


gulp.task('bower-css', function() {

  return gulp.src(wiredep().css)

    .pipe(gulp.dest('css/vendor'));

});
  

  gulp.task('default', ['server','bower','watch']);
