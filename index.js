var http2 = require('http2');
var fs = require('fs');

var server = http2.createServer({
	key: fs.readFileSync('privatekey.pem'),
	cert: fs.readFileSync('certificate.pem')
}, function(req, res) {
	var push = res.push('/client.js')
	push.end('alert("this is a server push");');
	fs.createReadStream('index.html').pipe(res);
});

server.listen(443, function() {
	console.log('listen on 443');
});