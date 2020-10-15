var http = require('http');
var fs = require('fs');


var server = http.createServer((request, response) => {

    if(request.url === '/' || request.url === '/home'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        fs.createReadStream(__dirname+ '/index.html')
        .pipe(response);
    } else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        fs.createReadStream(__dirname+ '/about.html')
        .pipe(response);
    } else if(request.url === '/api/todos'){
        response.writeHead(200, {'Content-Type' : 'application/json'})
        todos = [
            {
                id: 1,
                item: 'Play guitar today!'
            },
            {
                id: 2,
                item: 'Clean the dishes'
            }
        ]
        var data = JSON.stringify(todos);
        response.end(data);
    } else{
        response.writeHead(404, {'Content-Type' : 'text/html'})
        fs.createReadStream(__dirname+ '/404.html')
        .pipe(response);
    }
})

server.listen(3001, '127.0.0.1');
console.log('Listening at port no. 3001');