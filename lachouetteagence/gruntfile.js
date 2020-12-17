module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            compress: {
                options: {
                    keepSpecialComments: '*'
                },
                src: 'src/css/*.css',
                dest: 'dist/css/app.min.css'
            }
        },
        uglify: {
            dist: {
                src: 'src/js/*.js',
                dest: 'dist/js/app.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);
};