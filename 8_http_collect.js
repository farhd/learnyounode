var http = require('http');
var url = process.argv[2];

http.get(url, function done(res) {
	var resString = '';
	res.setEncoding('utf8');

	res.on('error', console.error);
	res.on('data', function(data) {
		resString += data;
	});
	res.on('end', function() {
		console.log(resString.length);
		console.log(resString);
	});

});
