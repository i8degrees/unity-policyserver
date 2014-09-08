// Grunt build tasks

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      server: {
        // command: 'echo "WARNING: This server requires root privileges to run on the default port 843. I strongly suggest consulting the project\'s README.md on how to fix this." && sudo node server.js'
        command: 'sudo node server.js'
      },
      client: {
        command: "node tests/client.js"
      },
    },
  });

  // Dependencies
  grunt.loadNpmTasks( 'grunt-shell' );

  grunt.registerTask('default', ['shell:server'] );
  grunt.registerTask('test', ['shell:client'] );
}
