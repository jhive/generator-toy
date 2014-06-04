module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    files: ['src/**/*.js'],

    jshint: {
      files: ['<%= files %>', '!src/**/*.spec.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },

    mochaTest: {
      test: {
        src: ['src/**/*.spec.js'],
        options: {
          reporter: 'spec'
        }
      }
    },

    watch: {
      all: {
        files: ['<%= files %>'],
        tasks: ['clear', 'jshint', 'mochaTest']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clear', 'jshint', 'mochaTest', 'watch']);
};