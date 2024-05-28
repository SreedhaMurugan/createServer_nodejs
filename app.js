var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("welcome to nodejs learnings")
    res.end()     //To stop the execution
}).listen(8080)

//To know the ip for our website
// var ip = require("ip");
// console.log(ip.address());