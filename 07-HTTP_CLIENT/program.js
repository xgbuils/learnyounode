var http = require('http')

var url = process.argv[2]

var request = http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.log);
});

request.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
