'use strict';

const gulp = require( 'gulp' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'gulp-autoprefixer' );


// CSS
const CSS_SOURCES = [ 'style/**/*.css' ];
const CSS_DESTINATION = './css';


gulp.task( 'css', () => {
	return gulp.src( CSS_SOURCES )
  .pipe( sourcemaps.init() )
  .pipe( autoprefixer() )
  .pipe( sourcemaps.write( '.' ) )
  .pipe( gulp.dest( CSS_DESTINATION ) );
} );

gulp.task( 'watch', () =>
  gulp.watch( CSS_SOURCES, gulp.series( 'css' ) )
);

gulp.task( 'default', gulp.series( 'css' ) );
