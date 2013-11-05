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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('server', ['connect:server']);
	grunt.registerTask('server:public', ['connect:public_server']);

};
