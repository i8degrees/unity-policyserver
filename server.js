// A simple Unity3D Socket Policy Server for NodeJS. Request must be, and
// response is, null-terminated, according to Adobe spec.
//
// Reference implementation: https://gist.githubusercontent.com/mattcg/489841/raw/15310d8218f5457af029fddcd90b2f52a1beb97c/node_fsps.js
//

// Dependencies
var policy_server = require('./src/policy_server');

// These parameters are currently not implemented; see README.md, .env for
// how to specify custom configuration
// var params = {
//   host: host,
//   port: port,
//   file: file,
//   timeout: timeout,
// };

policy_server.listen( {} );
