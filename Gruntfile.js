module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {
                    //compress: true,
                    //yuicompress: true,
                    //optimization: 2
                    paths:"public/css"
                },

                files: {
                    "public/css/bootstrap.css": "public/css/bootstrap.less",
                    "public/css/smartling.css": "public/css/smartling.less",
                    "public/css/hyde.css": "public/css/hyde.less"
                }
            }


        },
        watch: {
            styles: {
                files: ['public/css/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);



};