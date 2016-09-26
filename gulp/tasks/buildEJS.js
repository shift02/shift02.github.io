var gulp = require('gulp');
var ejs = require("gulp-ejs");
var fs =require('fs')

gulp.task('buildEJS', function() {

    var jsonData =  JSON.parse(fs.readFileSync('./src/main/ejs/data.json', 'utf8'));

    var ejs_src = ["./src/main/ejs/**/*.ejs", "!./src/main/ejs/**/_*.ejs"];
	gulp.src(ejs_src)
	.pipe(ejs({jsonData: jsonData},{"ext": ".html"}))
	.pipe(gulp.dest("./"));

});
