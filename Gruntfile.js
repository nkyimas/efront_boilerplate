module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {

          task: {

            // Point to the files that should be updated when
            // you run `grunt wiredep`
            src: [
              '*.html'
            ],

            options: {
              // See wiredep's configuration documentation for the options
              // you may pass:

              // https://github.com/taptapship/wiredep#configuration
              exclude: [ '/jquery/', 'bower_components/modernizr/modernizr.js' ]
            }
          }
        },
        watch: {
                less: {
                        files: [ 'bower.json' ],
                        tasks: [ 'exec:bower_install' ]
                },
        },
        exec: {
                bower_install: {
                        cmd: "bower install"
                }
        }
    });

    grunt.registerTask('default', []);

};
