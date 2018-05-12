var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var stylesPath = 'scss/';
// var cssPath = 'css/';

// PostCSS
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');

// var rename = require('gulp-rename');


gulp.task('sass', function() {
	gulp.src(stylesPath + '/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('css'));
});

// gulp.task('post', ['sass'], function() {
//     var plugins = [
//         autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }),
//         cssnano()
//     ];

//     return gulp.src(cssPath + 'style.css')
//         .pipe(postcss(plugins))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(cssPath));
// });

gulp.task('browserSync', function() {
	browserSync.init(['*.html', 'css/*.css', 'js/*.js'],{
		server: {
			baseDir: './'
		}
	});
});


gulp.task('watch',['sass','browserSync'], function() {
	gulp.watch([stylesPath + '/*.scss', '*html'], ['sass'])

});

gulp.task ('default', ['sass','browserSync','watch']);﻿

// gulp.task('watch',['sass', 'post', 'browserSync'], function() {
// 	gulp.watch([stylesPath + '/*.scss', cssPath + '/*.css', '*html'], ['sass'])

// });

// gulp.task ('default', ['sass', 'post', 'browserSync', 'watch']);﻿

// gulp.task ('build', ['sass', 'post']);﻿