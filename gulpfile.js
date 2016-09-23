var requireDir = require('require-dir');
var tasks = requireDir('./gulp/tasks');
var gulp = require('gulp');

gulp.task('default', function() {
	console.log("Hoge");
});