var map = require('through2-map')
var http = require('http')
var port = Number(process.argv[2])

http.createServer(function (req, res) {
	
 	if (req.method !== 'POST') return res.end('POST!\n')

 		req.pipe(map(function (chunk) {
 			return chunk.toString().toUpperCase()
 		})).pipe(res)
 	}

).listen(port)
