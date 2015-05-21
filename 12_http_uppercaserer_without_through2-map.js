/*** Version without through2-map ***/

var map = require('through2-map')
var http = require('http')
var port = Number(process.argv[2])

http.createServer(function (req, res) {
	
 	if (req.method != 'POST') return res.end('POST!\n')
	var body = ''

	req.on('data', function(data) {
		res.writeHeader(200, {"Content-Type": "text/plain"})
		body += data.toString().toUpperCase()
	})

	req.on('end', function() {
		res.end(body)
	})

).listen(port)
