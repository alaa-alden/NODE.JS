var http=require('http');
var server =http.createServer(function(req,res){
  console.log(`you sent to me '${req.url}'`);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('welcome to nodejs at morning');
});
server.listen(3000,'127.0.0.4');
console.log("test successful");
