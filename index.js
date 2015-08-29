var http2 = require('http2');
var fs = require('fs');

var server = http2.createServer({
	key: fs.readFileSync('privatekey.pem'),
	cert: fs.readFileSync('certificate.pem')
}, function(req, res) {
	res.end('hello world');
});

server.listen(443, function() {
	console.log('listen on 443');
});