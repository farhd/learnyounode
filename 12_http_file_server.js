var fs = require('fs')
var http = require('http')
var port = Number(process.argv[2])
var filePath = process.argv[3]
var fileStream = fs.createReadStream(filePath)

http.createServer(function (req, res) {

	res.writeHeader(200, {"Content-Type": "text/plain"})
	fileStream.pipe(res)

}).listen(port);
