let http = require('http');
let server = http.createServer(function(req, res) {
   if(req.url == '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Hello World!');
   }
   else if (req.url == '/about') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<h1>About</h1>");
      res.end();
   }
   else if (req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Contact</h1>");
        res.end();
   }
   else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found');
   }
});
server.listen(3030);
console.log("server run successfully");