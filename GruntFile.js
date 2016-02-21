/* global module:true */

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      files: ['webapp/**/*.js'],
      tasks: []
    }
  });

  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', ['express:dev']);

};