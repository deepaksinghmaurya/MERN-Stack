var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (request, response) => {

    response.sendFile(__dirname+'/index.html');
});

app.get('/about', (request, response) => {

    // response.sendFile(__dirname+'/about.html');
    response.render('about', {qs: request.query});
});

app.post('/about', urlencodedParser,  (request, response) => {
    
    // console.log(request);
    response.send('Recieved Data');
});

app.get('/profile/:name', (request, response) => {
    // response.send('You have made a request' + request.params.name);
    response.render('profile', {
        person: request.params.name
    });
})

// app.put();

// app.delete();

app.listen(3001, () => {
    console.log('Started my Express Node Server at 3001')
})