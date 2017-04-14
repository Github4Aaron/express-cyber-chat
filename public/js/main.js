
//new socket instance
//link to where socketIO is running
var socket = io("http://localhost:3000");
//socket listens for disconnect, and fires callback
socket.on("disconnect", function() {
	setTitle("Disconnected");
});

//listens for connect
socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

//listens to message event, then callback fires and prints message
socket.on("message", function(message) {
	printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    //on user submit, chat is sent to server
    //socket emits chat back to server
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
