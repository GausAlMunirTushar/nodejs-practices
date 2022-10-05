const http = require('http');
const fs = require('fs');

const server = http.createServer( function (req, res) {
    if(req.url == "/"){
       fs.rename("data1.txt", "data-file.txt", function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File name fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File name success");
                res.end();
            }
        });
    }
    
});
server.listen(3535);
console.log("Server is running on port 3535");