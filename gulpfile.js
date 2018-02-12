var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('sass', function() {
//         return gulp.src('scss/styles.scss')
//             .pipe(sass())
//             .pipe(gulp.dest('css'))
//             .pipe(browserSync.reload({
//                 stream: true
//             }))
// });


// Run everything
gulp.task('default', ['browser-sync'], function() {

    //Compile sass on file change
    // gulp.watch('scss/*.scss', ['sass']);
    //
    // gulp.watch('scss/*.scss', browserSync.reload);
    gulp.watch('styles/**/*.css', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
    gulp.watch('scripts/**/*.js', browserSync.reload);
    gulp.watch('**/*.html', browserSync.reload);

});

// Configure the browserSync task
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});