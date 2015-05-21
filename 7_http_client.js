var http = require('http');
var url = process.argv[2];

http.get(url, function done(res) {
	res.setEncoding('utf8');

	res.on('error', console.error);
	res.on('data', console.log);

});
