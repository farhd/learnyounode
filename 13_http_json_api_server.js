var http = require('http')
var url = require('url')
var port = Number(process.argv[2])

http.createServer(function (req, res) {
	
	var urlReq = url.parse(req.url, true)
	var timeReq = urlReq.query.iso
	var time = new Date(timeReq)
	var timeRes

	if (urlReq.pathname === '/api/parsetime') {
		timeRes = parsetime(time)
	}
	else if (urlReq.pathname === '/api/unixtime') {
		timeRes = unixtime(time)
	}
	
	if (timeRes) {
		res.writeHeader(200, {"Content-Type": "text/json"})
		res.end(JSON.stringify(timeRes))
	} else {
		res.writeHeader(404)
		res.end()
	}

}).listen(port)

function parsetime(time) {
	return {
		hour : time.getHours(),
		minute : time.getMinutes(),
		second : time.getSeconds()
	}
}

function unixtime(time) {
	return {
		unixtime: time.getTime()
	}
}
