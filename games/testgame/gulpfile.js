var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Build app
gulp.task('build', function() {
	console.log('Running Build');
});

// Run gulp webserver for local dev
gulp.task('webserver', function() {
	var port = 3030;
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true,
			port: port
		}));
});



