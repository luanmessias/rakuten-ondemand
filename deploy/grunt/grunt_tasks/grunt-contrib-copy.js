module.exports = function (grunt) {

    grunt.config('copy', {
        // Mover um ou mais componentes para o R
        css_components: {
            expand: true,
            cwd: '../css/components/',
            src: ['**/*'],
            dest: '<%=paths.custom%>css/components/'
        },
        css_to_dev: {
            expand: true,
            cwd: '../css/',
            src: ['**'],
            dest: '<%=paths.custom%>css/'
        },
        // Mover imagens para o R
        img_to_dev: {
            expand: true,
            cwd: '../img/',
            src: ['**', '!**/*.db'],
            dest: '<%=paths.custom%>img/'
        },
        // Mover js para o R
        js_to_dev: {
            expand: true,
            cwd: '../js/',
            src: ['**'],
            dest: '<%=paths.custom%>js/'
        },
        // Mover js para o R
        fonts_to_dev: {
            expand: true,
            cwd: '../fonts/',
            src: ['**'],
            dest: '<%=paths.custom%>fonts/'
        },
        
    });

    grunt.loadNpmTasks('grunt-contrib-copy-force');

};
