var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default',()=>{
    browserify('./src/webapi.js',{standalone:'bitcoin',debug:true})
    .transform(babelify,{presets:['es2015']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/scripts'))
});