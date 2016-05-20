'use strict';

const gulp = require( 'gulp' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'gulp-autoprefixer' );
const ts = require( 'gulp-typescript' );


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

gulp.task( 'watch', [ 'css' ], () => {
  gulp.watch( CSS_SOURCES, [ 'css' ] );
} );

gulp.task( 'default', [ 'css' ] );
