module.exports = function (grunt) {

    grunt.config('ftp_push', {

        all: {
            options: {
                authKey: "implantacao",
                host: '200.229.205.140',
                dest: '/Genesis/Repository/<%= config.projectFolder %>/locales/custom/',
                port: 21,
                incrementalUpdates: false
            },
            files: [
                {expand: true,cwd: '../css/',src: ['**/*'], dest:'/css/' },
                {expand: true,cwd: '../img/',src: ['**/*'], dest:'/img/'},
                {expand: true,cwd: '../js/',src: ['**/*'], dest:'/js/'},
                {expand: true,cwd: '../fonts/',src: ['**/*'], dest:'/fonts/'}
            ]
        },

        css: {
            options: {
                authKey: "implantacao",
                host: '200.229.205.140',
                dest: '/Genesis/Repository/<%= config.projectFolder %>/locales/custom/css/',
                port: 21,
                incrementalUpdates: true
            },
            files: [{
                expand: true,
                cwd: '../css/',
                src: ['**/*']
            }]
        },

        img: {
            options: {
                authKey: "implantacao",
                host: '200.229.205.140',
                dest: '/Genesis/Repository/<%= config.projectFolder %>/locales/custom/img/',
                port: 21,
                incrementalUpdates: true
            },
            files: [{
                expand: true,
                cwd: '../img/',
                src: ['**/*']
            }]
        },
        
        js: {
            options: {
                authKey: "implantacao",
                host: '200.229.205.140',
                dest: '/Genesis/Repository/<%= config.projectFolder %>/locales/custom/js/',
                port: 21,
                incrementalUpdates: true
            },
            files: [{
                expand: true,
                cwd: '../js/',
                src: ['*']
            }]
        },

        fonts: {
            options: {
                authKey: "implantacao",
                host: '200.229.205.140',
                dest: '/Genesis/Repository/<%= config.projectFolder %>/locales/custom/fonts/',
                port: 21,
                incrementalUpdates: true
            },
            files: [{
                expand: true,
                cwd: '../fonts/',
                src: ['**/*']
            }]
        },

    });

    grunt.loadNpmTasks('grunt-ftp-push');

};