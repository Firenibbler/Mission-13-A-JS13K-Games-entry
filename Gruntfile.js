var files = [
    "libs/main.js",
    "libs/update.js",
    "libs/pointer.js",
    "libs/graphics.js",
    "libs/sprite.js",
    "libs/text.js",
    "libs/audio.js",

    "src/preload.js",
    "src/start.js",
    "src/play.js",
    "src/system.js",
    "src/gameOver.js",
];

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {

            my_target: {
                options: {
                    preserveComments: false,
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                },
                files: {
                    "build/scripts.min.js": files
                },

            },

            my_advanced_target: {
                options: {
                    banner: '/*! <%= pkg.name %> - Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> - Author: <%= pkg.author %> */\n',
                    preserveComments: true,
                    compress: false,
                    mangle: false,
                    beautify: true,
                    bracketize: true,

                },
                files: {
                    "build/scripts.js": files

                },

            },

        },
        jsdoc: {
            dist: {
                src: files,
                options: {
                    destination: 'docs'
                }
            }
        },
        obfuscator: {
            options: {
                // global options for the obfuscator 
            },
            task1: {
                options: {
                    // options for each sub task 
                },
                files: {
                    'build/supermin.min.js': files
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-obfuscator');



    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-jsdoc');

    // Default task(s).
    //grunt.registerTask('default', ['uglify', 'jsdoc']);
    grunt.registerTask('default', ['uglify']);

};
