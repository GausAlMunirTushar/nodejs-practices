const http = require('http');
const fs = require('fs');

const server = http.createServer( function (req, res) {
    if(req.url == "/"){
        fs.readFileSync('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});
server.listen(8050);
console.log("Server is running on port 5050");