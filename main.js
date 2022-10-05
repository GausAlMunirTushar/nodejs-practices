const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( function (req, res) {
    if(req.url == "/"){
       fs.unlink("data-file.txt", function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File unlink fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File unlink success");
                res.end();
            }
        });
    }
    else if(req.url == "/folder"){
        fs.mkdir(path.join(__dirname, 'test2'), function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("Directory creation fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("Directory creation success");
                res.end();
            }
        });
    }
    
});
server.listen(3535);
console.log("Server is running on port 3535");