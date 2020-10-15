var http = require('http');

var server = http.createServer( function(request, response){
        console.log('A request was made'+ request.url);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('<h1>Hi from the Server</h1>')
});

server.listen(3001, '127.0.0.1');
console.log('Listening at port 3001');