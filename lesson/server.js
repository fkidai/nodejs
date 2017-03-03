var http = require('http');
var server = http.createServer();
var server_port = 8080;
var server_ipaddress = '127.0.0.1';

server.on('request',doRequest);
server.listen(server_port,server_ipaddress);
console.log('server running .... ' + server_ipaddress+ ':'+server_port);

function doRequest(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write('Hellow World!!');
  res.end();

}
