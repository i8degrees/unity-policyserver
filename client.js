var net = require('net');

// 'connect' listener
var client = net.connect( {port: 843}, function() {
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
