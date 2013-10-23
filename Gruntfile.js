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
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('server', ['connect:server']);

};
