var http = require('http');
var urls = process.argv.slice(2);
var results = [];
var count = urls.length;

var getData = function(url, i) {
	http.get(url, function(res) {
		var result = '';
		res.setEncoding('utf8');

		res.on('error', console.error);
		res.on('data', function(data) {
			result += data;
		});
		res.on('end', function() {
			results[i] = result;
			if (--count === 0) {
				results.forEach(function (item) {
					console.log(item);
				});
			}
		});
	});
}

urls.forEach(function(url,i) {
	getData(url, i);
});
