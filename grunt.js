module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        smushit:{
            specific: {
                src:['tests/img/logo.png','tests/img/tellme.jpg']
            },
            path: {
                src:'tests/img'
            },
            only: {
                src:'tests/img/logo.png'
            },
            destination:{
                src:['tests/img/logo.png'],
                dest:'tests/img/min'
            }
        },
        lint: {
            files: [
                'grunt.js',
                'tasks/**/*.js'
            ]
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        },
        jshint: {
            options: {
                es5: true,
                esnext: true,
                bitwise: true,
                curly: true,
                eqeqeq: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                regexp: true,
                undef: true,
                strict: true,
                trailing: true,
                smarttabs: true,
                node: true
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask( 'default', 'smushit:specific smushit:path smushit:only smushit:destination lint' );

};