let http = require('http');
const URL = require('url');

let server = http.createServer(function(req, res) {

    let myUrl ="http://gausalmunirtushar.me/index.html?year=2017&month=february";
    let myURLObject = URL.parse(myUrl, true);
    let myHostName = myURLObject.host;
    let myPathName = myURLObject.pathname;
    let href = myURLObject.href;
    let search = myURLObject.search;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(myHostName);
        res.end();

});
server.listen(3030);
console.log("server run successfully");