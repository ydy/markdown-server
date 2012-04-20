var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
  fs.readFile('text.md', 'utf8', function(err, text){
    if (err) return console.log(err)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Perrin\nYou Requested:\n' + req.url+ '\n');
    res.write('It has ' + req.url.length + ' letters in it.\n');
    res.write(text);
    res.end();
  })
}).listen(1300);
console.log('Server running at http://127.0.0.1:1300/');





