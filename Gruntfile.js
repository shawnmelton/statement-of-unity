module.exports = (function(grunt) {
    'use strict';

    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'es2017']}]]
                },
                src: ['src/js/app.js'],
                dest: 'js/compiled.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/compiled.css': 'src/css/styles.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [
        'sass', 'browserify'
    ]);
});