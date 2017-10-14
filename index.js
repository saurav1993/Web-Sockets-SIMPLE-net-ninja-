var express = require("express");
var socket = require("socket.io");
//app setup

var app = express();

//Static Files
app.use(express.static("public"));


var server = app.listen(4000,()=>{
    console.log("app is running on port : 4000");
})

//Socket setup
var io = socket(server);
io.on('connection',(socket)=>{
    console.log("made socket connection",socket.id);

    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });

    socket.on("typing",function(data){
        socket.broadcast.emit("typing" , data);
    });
})