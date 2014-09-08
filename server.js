// A simple Unity Socket Policy Server for NodeJS. Request must be, and
// response is, null-terminated, according to Adobe spec.
//
// Reference implementation: https://gist.githubusercontent.com/mattcg/489841/raw/15310d8218f5457af029fddcd90b2f52a1beb97c/node_fsps.js
//

// Dependencies
var fs = require('fs');
var net = require('net');

var PolicyServer = module.exports = {

  // File contents
  fp_buffer: null,

  listen: function listen( params ) {

    fp_buffer = fs.readFileSync( params.file, 'utf8' );

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

    server.listen( params.port, params.host );

    console.log( 'Unity Web Player socket policy server listening at ' + params.host + ':' + params.port );

  }, // end function listen

}; // end function PolicyServer

// Environment defaults
var file = process.env.SOCKET_SERVER_FILE || './crossdomain.xml';

// 0.0.0.0 is what works for Stew
var host = process.env.SOCKET_SERVER_HOST || 'localhost';
var port = process.env.SOCKET_SERVER_PORT || 843;
var timeout = process.env.SOCKET_SERVER_TIMEOUT || 3000;

var params = {
  host: host,
  port: port,
  file: file,
  timeout: timeout,
};

var policy_server = PolicyServer.listen( params );
