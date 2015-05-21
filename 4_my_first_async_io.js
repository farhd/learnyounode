var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, 'utf8', doneReading);

function doneReading(err, data) {
	if (err) { console.error(err) };

	var lines = data.split('\n').length - 1;
	console.log(lines);
};
