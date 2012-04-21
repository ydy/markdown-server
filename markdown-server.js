var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
  fs.readFile('./' + req.url + '.md', 'utf8', function(err, text){
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<b>i</b> couldn\'t find <i>the</i> file');
      res.end();
      return console.log(err)
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(text);
    res.end();
  })
}).listen(1300);
console.log('Server running at http://127.0.0.1:1300/');





