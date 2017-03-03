var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(8080);
console.log('Server running!');

// ���N�G�X�g�̏���
function doRequest(req, res) {
  fs.readFile('./2-4.html', 'utf-8',doWritePage);

    function doWritePage(ero,data2) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data2);
      res.end();
    }
}
