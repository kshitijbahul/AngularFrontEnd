'use strict;'
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var path = require('path');
var babelify = require('babelify');
var browserify = require('browserify');
var source =require ('vinyl-source-stream');
var gulpif =require ('gulp-if');
var ngAnnotate =require('browserify-ngannotate');

gulp.task('sass', function(){
    console.log('In the css task',path.join(__dirname,'/dist/css'));
    return gulp.src(path.join(__dirname,'/scss/**/*.scss'))
        .pipe(sass().on('error',sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(path.join(__dirname,'/dist/css')));
});

gulp.task('cleanAppFiles',function(){
    console.log('In the cleanAppFiles task',path.join(__dirname,'/dist'));
    return gulp.src([path.join(__dirname,'/dist/css/*'),path.join(__dirname,'/dist/js/*')],{read: false}).pipe(clean());
});

gulp.task('testGulp', function() {
    if(process.env.NODE_ENV === 'production') {
        console.log('gulp runs as expected on production');
    } else {
        console.log('gulp runs as expected');
    }
});
gulp.task('cleanJsFiles',function(){
    console.log('In the cleanJsFiles task',path.join(__dirname,'/dist'));
    return gulp.src(path.join(__dirname,'/dist/js/*'),{read: false}).pipe(clean());
});
gulp.task('combineAppJs',function(){
    console.log('In the js task',path.join(__dirname,'/dist/js'));
    return gulp.src([path.join(__dirname,'/js/**/*.js'),path.join(__dirname,'/components/**/*.js')])
        .pipe(browserify({insertGlobals: true}))
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.join(__dirname,'/dist/js')));
});
gulp.task('browserify',function(){
    console.log('In the browserify task',path.join(__dirname,'/dist/js'));
    /*return gulp.src(path.join(__dirname,'/js/invoiceManager.js'))
    .pipe(browserify().transform("babelify", {extensions: [".babel"]}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.join(__dirname,'/dist/js')));*/
    const shouldCreateSourcemap = false;
    let bundler = browserify({
        entries: [path.join(__dirname,'/js/invoiceManager.js')],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: false
    });
    const transforms = [
        { name: babelify, options: {} },
        //{ name: debowerify, options: {} },
        //{ name: ngAnnotate, options: {} },
        //{ name: 'brfs', options: {} },
        //{ name: bulkify, options: {} },
        //{ name: envify, options: {} }
    ];
    transforms.forEach(function(transform) {
        bundler.transform(transform.name, transform.options);
    });

    function rebundle() {
        //bundleLogger.start();

        const stream = bundler.bundle();
        const sourceMapLocation = false;

        return stream
        // .on('error', handleErrors)
        // .on('end', bundleLogger.end)
        .pipe(source('invoiceManager.js'))
        //.pipe(gulpif(shouldCreateSourcemap, buffer()))
        //.pipe(gulpif(shouldCreateSourcemap, sourcemaps.init({ loadMaps: true })))
        /*.pipe(gulpif(false, streamify(uglify({
            compress: { drop_console: true } // eslint-disable-line camelcase
        }))))*/
        //.pipe(gulpif(shouldCreateSourcemap, sourcemaps.write(sourceMapLocation)))
        .pipe(gulp.dest(path.join(__dirname,'/dist/js')));
        //.pipe(browserSync.stream());
    };
    rebundle();
});
gulp.task('connect',function(){
    connect.server({
        port : 8090,
        livereload: true
    });
});
gulp.task('watch',function(){
    gulp.watch(path.join(__dirname,'/scss/**/*.scss'),['sass']);
    gulp.watch([path.join(__dirname,'/js/**/*.js'),path.join(__dirname,'/components/**/*.js')],['cleanJsFiles','browserify']);
});
gulp.task('default',['testGulp','cleanAppFiles','sass','browserify','connect','watch']);
//gulp.task('default',['browserify'])