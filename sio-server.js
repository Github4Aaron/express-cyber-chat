var express = require("express"); 
var http = require("http");//SocketIO will require that we set it up with HTTP module. 
var app = express(); //this creates instance of express.

//This server is sent the express app.
//We need this server to work with socketIO.
var server = http.createServer(app).listen(3000);

//socket.io is a function that must be sent the 
//http server that we created the express app with.
var io = require("socket.io")(server);

//static  is middleware that will server our files from public folder.
app.use(express.static("./public"));

//listens for incoming socket connection, and the fire kickoff.
//Socket endpoint is passed to callback as an argument.
io.on("connection", function(socket) {
//When a chat event occurs, this callback fires.
//message is passed as argument, and then broadcast to 
//every connected socket. 
    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });
//When client connects, we emit a message.
	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");


//SocketIO is a module for websockets.
//It falls back to long-polling when websockets are supported by the browser. 
//Polling is typcially done with a setInterval function connected to an Ajax call.
//Long polling is where the client requests new data from the server, but the server does not respond until there is data.