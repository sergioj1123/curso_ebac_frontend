module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./source/styles/main.css": "./source/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "./build/styles/main.min.css": "./source/styles/main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "./build/scripts/main.min.js": "./source/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
