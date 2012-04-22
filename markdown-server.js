var http = require('http');
var fs = require('fs')
var gh = require('github-flavored-markdown')
module.exports = function initializeMDServer(dir) {
  http.createServer(function (req, res) {
    fs.readFile(dir + req.url + '.md', 'utf8', function(err, text){
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<b>i</b> couldn\'t find <i>the</i> file');
        res.end();
        return console.log(err)
      }
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write(gh.parse(text))
      res.end();
    })
  }).listen(1300);
  console.log('Server running at http://127.0.0.1:1300/');
  console.log("Looking for markdown files in the directory: " + dir)
}



