var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, doneReading);

function doneReading(err, list) {
	if (err) { console.error(err) };

	list.forEach(function(item) {
		var extCurr = path.extname(item).slice(1);
		if ( extCurr === ext ) {
			console.log(item);
		} 
	});
};
