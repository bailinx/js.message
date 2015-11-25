module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist/**', 'dist/*.*'],
        },
        copy: {
            js: {
                expand: true,
                cwd: 'js/',
                src: '**',
                dest: 'dist/js/'
            },
            css: {
                expand: true,
                cwd: 'css/',
                src: '**',
                dest: 'dist/css/'
            },
            img: {
                expand: true,
                cwd: 'image/',
                src: '**',
                dest: 'dist/image/'
            }
        },
        uglify: {
            options: {
                footer:'\n/*! build time: <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                expand: true,
                cwd: 'dist/js/',
                src: '*.js',
                dest: 'dist/js/',
                ext: '.min.js',
                extDot: 'last'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                report: 'gzip',
            },
            build1: {
                files: [{
                    expand: true,
                    cwd: 'dist/css/',
                    src: '*.css',
                    dest: 'dist/css/',
                    ext: '.min.css',
                    extDot: 'last'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify']);
};
