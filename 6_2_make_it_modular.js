var fileList = require('./6_1_make_it_modular.js');
var dir = process.argv[2];
var ext = process.argv[3];

fileList(dir, ext, function(err, list) {
	if (err) {
		return console.error(err);
	}
	list.forEach(function(item) {
		console.log(item);
	});
});
