// Dependencies
var net = require('net');
var config = require('dotenv');

config.load();  // Loads .env file into shell environment

var host = process.env.UNITY_POLICY_SERVER_HOST;
var port = process.env.UNITY_POLICY_SERVER_PORT;

var client = net.connect( { port: port, host: host }, function() {
  console.log('client connected');

  client.write('<policy-file-request/>\0');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('client disconnected');
});
