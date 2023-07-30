var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('default', [ 'browser-sync' ]);
gulp.task('browser-sync', function (){
    browserSync.init(null,{
        proxy: "http://localhost:3000"
    });
});


