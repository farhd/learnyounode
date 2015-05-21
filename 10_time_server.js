var net = require('net')
var port = process.argv[2]
var server = net.createServer(function (socket) {
	socket.end(now() + '\n')
})
server.listen(port);

function now() {
	var date = new Date()
	var dateFormated = date.getFullYear() + '-' 
			   + zeroFill(date.getMonth() + 1) + '-'
			   + zeroFill(date.getDate()) + ' '
			   + zeroFill(date.getHours()) + ':'
			   + zeroFill(date.getMinutes())
   return dateFormated
}
function zeroFill(num) {
	return (num < 10 ? '0' : '') + num
}
