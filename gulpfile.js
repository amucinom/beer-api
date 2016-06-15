var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
// var browserSync = require('browser-sync').create();

var input = './client/styles/sass/main.scss';
var output = './client/styles/css/';


// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//
//     gulp.watch("styles/sass/*.scss", ['sass']).on('change', browserSync.reload);
//     gulp.watch("styles/*.css").on("change", browserSync.reload);
//     gulp.watch("*.html").on('change', browserSync.reload);
//     gulp.watch("portfolio/*.html").on('change', browserSync.reload);
//     gulp.watch("scripts/*.js").on('change', browserSync.reload);
// });

gulp.task('sass', function() {
    return gulp
		.src(input)
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(csscomb())
        .pipe(gulp.dest(output));
        // .pipe(browserSync.stream());
});

gulp.task('watch', function() {
	return gulp
		.watch(input, ['sass'])
		.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

gulp.task('default', ['sass', 'watch']);
