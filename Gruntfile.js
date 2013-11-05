/* jshint node: true */
var grunt  = require('grunt');

module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					keepalive: true,
					port: 8888,
					open: true
				}
			},
			public_server: {
				options: {
					keepalive: true,
					hostname: '*',
					port: 8888
				}
			}
		},

		watch: {
			'meta-sync': {
				files: [
					'package.json',
				],
				tasks: ['meta-sync']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', ['connect:server']);
	grunt.registerTask('server:public', ['connect:public_server']);

	// Sync metadata from package.json into bower.json
	grunt.registerTask('meta-sync', 'Sync metadata from package.json into bower.json.', function() {
		var pkg = grunt.file.readJSON('package.json');
		var bower = grunt.file.readJSON('bower.json');

		// Description
		bower.description = pkg.description;

		// Version
		bower.version = pkg.version;

		// Homepage
		bower.homepage = pkg.homepage;

		// Author and contributors
		bower.authors = [pkg.author].concat(pkg.contributors).map(function(c) {
			var author = {};
			if ( c.name ) author.name = c.name;
			if ( c.email )author.email = c.email;
			if ( c.url ) author.homepage = c.url;
			return author;
		});

		// License
		bower.license = pkg.license.url;

		// Save
		grunt.file.write('bower.json', JSON.stringify(bower, null, 2) + '\n');
		grunt.log.writeln('File "bower.json" updated.');
	});

};
