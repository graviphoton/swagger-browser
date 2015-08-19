'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

gulp.paths = {
    "dist": "dist",
    "sources": [
        "index.html",
        "nginx.conf",
        "config.js",
        "bower_components/angular-swagger-ui/dist/css/swagger-ui.min.css",
        "bower_components/airbrake-js-client/dist/client.js",
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/angular/angular.min.js",
        "bower_components/angular-swagger-ui/dist/scripts/swagger-ui.min.js",
        "bower_components/angular-resource/angular-resource.min.js",
        "bower_components/angular-cookies/angular-cookies.min.js",
        "bower_components/angular-sanitize/angular-sanitize.min.js",
    ]
};

gulp.task('clean', function(done) {
    $.del([gulp.paths.dist + '/'], done);
});

gulp.task('bower', function() {
    return $.bower();
});

gulp.task('build', ['bower'], function(done) {
    gulp.src(gulp.paths.sources)
        .pipe($.copy(gulp.paths.dist));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
