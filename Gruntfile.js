'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed',
					loadPath: 'bower_components/bootstrap-sass/assets/stylesheets/'
				},
				files: {
					'assets/dacaverna.css': '_assets/scss/dacaverna.scss'
				}
			}
		},

		copy: {
			main: {
				files: [
					{src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'assets/jquery.min.js'},
				],
			},
		},

		handlebars: {
			compile: {
				options: {
					namespace: "JST"
				},
			files: {
				"_assets/js/hbs-event.js": "_assets/templates/event.hbs"
				}
			}
		},

		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			dist: {
				src: [
					'bower_components/moment/min/moment-with-locales.min.js',
					'bower_components/handlebars/handlebars.runtime.min.js',
					'_assets/js/intro.js', 
					'_assets/js/main.js', 
					'_assets/js/hbs-event.js',
					'_assets/js/facebook-events.js', 
					'_assets/js/outro.js'
				],
				dest: 'assets/dacaverna.js',
			},
		},

		jshint: {
			beforeconcat: [
					// '_assets/js/intro.js', 
					'_assets/js/main.js', 
					// '_assets/js/hbs-event.js',
					'_assets/js/facebook-events.js', 
					// '_assets/js/outro.js'
				] //,
			// afterconcat: ['assets/dacaverna.js']
		}		
  	});


	grunt.registerTask('default', ['sass', 'copy', 'handlebars', 'concat', 'jshint']);
}