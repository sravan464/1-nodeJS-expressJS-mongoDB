// this(commented lines) is the pure nodeJS
// var http = require('http');
//
// http.createServer(function(req,res){
//     res.writeHead(200,{
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello World ! \n')
// }).listen(3000,'127.0.0.1');


var express = require('express');
var app = express();

app.get('/',function(req,res){
    // res.send('hello world from node mon')
    // res.json({key:'hello world from node mon'})
    res.json({key:'hello world from node mon'})
})

var server = app.listen(3000,function () {
    console.log('Server is running at http://127.0.0.1:3000')
})