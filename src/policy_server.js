// Dependencies
var fs = require('fs');
var net = require('net');
var config = require('dotenv');

// Configuration
config.load();  // Loads .env file into shell environment

var PolicyServer = module.exports = {

  // File contents
  fp_buffer: null,

  listen: function listen( params ) {

    fp_buffer = fs.readFileSync( process.env.UNITY_POLICY_SERVER_FILE, 'utf8' );

    var server = net.createServer( function ( stream ) {
      stream.setEncoding( 'utf8' );
      stream.setTimeout( params.timeout ); // 3s

      console.log( 'Established connection from ' + stream.remoteAddress + '.' );

      stream.on('data', function ( command ) {
      if( command == '<policy-file-request/>\0' ) {
        console.log( 'Accepted request from ' + stream.remoteAddress + '.')
        stream.end( fp_buffer + '\0' );
      }
      else {
        console.log( command.toString() );
        console.log('Bad request from ' + stream.remoteAddress + '.');
        stream.end();
      }
    });

      stream.on('end', function() {
        stream.end();
      });

      stream.on('timeout', function() {
        console.log('Request from ' + stream.remoteAddress + ' timed out.');
        stream.end();
      });
    }); // end var server

    // FIXME
    // process.setgid('nobody');
    // process.setuid('nobody');

    server.listen( process.env.UNITY_POLICY_SERVER_PORT, process.env.UNITY_POLICY_SERVER_HOST );

    console.log( 'Unity Web Player socket policy server listening at ' + process.env.UNITY_POLICY_SERVER_HOST + ':' + process.env.UNITY_POLICY_SERVER_PORT );

  }, // end function listen

}; // end function PolicyServer
