const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write(" server respond");
        res.end();
    }else if(req.url == '/user'){
        res.write("user Listning");
        res.end();
    }
}).listen(port)