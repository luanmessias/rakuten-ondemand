module.exports = function(grunt) {

    grunt.config('clean', {
        options: {
            force: true
        },
        css: {
            files: [{
                dot: true,
                src: '../css'
            }]
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-clean');

  };

