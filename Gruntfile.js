'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dev: {
                src: ['build/']
            },
        },

        copy: {
            dev: {
                expand: true,
                cwd: 'app/',
                src: ['*.html', '*.css'],
                dest: 'build/',
                filter: 'isFile'
            }
        },

        browserify: {
            dev: {
                options: {
                    transform: ['debowerify', 'hbsfy'],
                    debug: true,
                },
                src: ['app/js/**/*.js'],
                dest: 'build/bundle.js'
            },
        },

    });

    grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
};
