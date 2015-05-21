var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {

	fs.readdir(dir, function doneReading(err, list) {

		if (err) return cb(err, null);

		list = list.filter(function(item) {
			var extCurr = path.extname(item).slice(1);
			return extCurr === ext;
		});

		cb(null, list);
	});
};
