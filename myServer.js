//this is the back end where mongodb data is stored and returned
//2 functions
//1. get a string, date 
var server = require('websocket').server;
var http = require('http');

var socket = new server({
	httpServer: http.createServer().listen(1337)
});

socket.on('request', function(request){
	var connection = request.accept(null, request.origin);

	connection.on('message', function(message){
		var dat = message.utf8Data;

		if(dat == "taken")
		{
			var cars = ["a", "b", "c"];
			connection.sendUTF(cars);
		}
		else
		{
			console.dir(dat);
		}
	});

	connection.on('close', function(connection){
		console.log('connection closed');
	});
});