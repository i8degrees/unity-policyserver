// A simple Unity Socket Policy Server for NodeJS. Request must be, and
// response is, null-terminated, according to Adobe spec.
//
// Reference implementation: https://gist.githubusercontent.com/mattcg/489841/raw/15310d8218f5457af029fddcd90b2f52a1beb97c/node_fsps.js
//
// See also: http://nodejs.org/api/net.html
//

var fs = require('fs');

// Environment defaults
var file = process.env.SOCKET_SERVER_FILE || './crossdomain.xml';

// 0.0.0.0 is what works for Stew
var host = process.env.SOCKET_SERVER_HOST || 'localhost';
var port = process.env.SOCKET_SERVER_PORT || 843;

// File contents
var fp_buffer;

var policy_server = require('net').createServer(function (stream) {
  stream.setEncoding( 'utf8' );
  stream.setTimeout( 3000 ); // 3s

  console.log('Established connection from ' + stream.remoteAddress + '.');

  stream.on('data', function ( command ) {
    if( command == '<policy-file-request/>\0' ) {
      console.log('Good request; sending file to ' + stream.remoteAddress + '.')
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
});

fp_buffer = fs.readFileSync(file, 'utf8');

policy_server.listen( port, host );

// FIXME
// process.setgid('nobody');
// process.setuid('nobody');

console.log( 'Unity Web Player socket policy server running at ' + host + ':' + port + ' and serving ' + file );
