module.exports = function (grunt) {

    // Load per-task config from separate files.
    grunt.loadTasks('grunt_tasks');

    grunt.registerTask('start', function () {
        if (pkg.deploy_homolog == true) {
            grunt.task.run([
                'copy:core',
                'copy:banners',
                'sass:base',
                'sass:allModules',
                'copy:views',
                'copy:css_to_dev',
                'copy:img_to_dev',
                'copy:js_to_dev',
                'ftp_push:all',
                'clean',
                'watch'
            ]);
        } else {
            grunt.task.run([
                'copy:core',
                'copy:banners',
                'sass:base',
                'sass:allModules',
                'copy:views',
                'copy:css_to_dev',
                'copy:img_to_dev',
                'copy:js_to_dev',
                'copy:fonts_to_dev',
                'clean',
                'watch'
            ]);
        }
    });

    grunt.registerTask('w', ['watch']);

};