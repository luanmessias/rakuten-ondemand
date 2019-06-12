module.exports = function(grunt) {

    grunt.config('watch', {

        config: {
            files: ['Gruntfile.js', './grunt_tasks/*'],
            tasks: ['w'],
            options: {
                reload: true
            }
        },

        sass: {
            files: ['../sass/**/*.scss'],
            tasks: ['sass:sass']
        },

    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');

  };

