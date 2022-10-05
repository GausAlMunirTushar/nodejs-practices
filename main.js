const http = require('http');
const fs = require('fs');

const server = http.createServer( function (req, res) {
    if(req.url == "/"){
        fs.writeFile("data.txt", "hello data" , function(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("File created successfully");
        });  
    }
    else if(req.url == "/read"){
        let data = fs.readFileSync("index.html");{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        };
    }
});
server.listen(3535);
console.log("Server is running on port 3535");