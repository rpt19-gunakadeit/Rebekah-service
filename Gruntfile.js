module.exports = function(grunt) {
  // Load S3 plugin
  grunt.loadNpmTasks('grunt-aws')

  // plugin for minification
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),
    s3: {
      options: {
        accessKeyId: '<%= aws.accessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.secretAccessKey %>', // You can also use env variables
        bucket: '<%= aws.bucket %>',
        region: 'us-east-2',
      },
      build: {
        cwd: 'public/s3',
        src: '**',
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/s3/reviewsBundle.min.js': ['public/dist/reviews.bundle.js'],
          'public/s3/shippingReturnsBundle.min.js': ['public/dist/shippingReturns.bundle.js']
        }
      }
    }
  })

  // Default task(s).
  grunt.registerTask('default', ['s3', 'uglify'])
}