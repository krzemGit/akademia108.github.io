let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('test', function(){
	console.log('test');
});

// ta funckja kopiuje wszystko z katlogu scss do katalogu css wprowadzając odpowiednie zmiany
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// ta funkcja włącza obserwacje katalogu scss na wszelkie zmiany, tak aby były w czasie rzeczywistym
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series('sass')); 
});
