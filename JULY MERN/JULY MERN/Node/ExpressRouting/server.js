var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({extended: true});


// app.use(urlencodedParser);

app.get('/', (request, response) => {

    response.sendFile(__dirname+'/index.html');
});

app.get('/about', (request, response) => {

    // response.sendFile(__dirname+'/about.html');
    console.log(request.body);
    response.render('about', {qs: request.query});
});

app.post('/about', urlencodedParser, (request, response) => {
    
    console.log(request.body);
    response.send('Recieved Data');
});

app.get('/profile/:name', (request, response) => {
    // response.send('You have made a request' + request.params.name);
    
    let data = {
        age: 25,
        job: 'coder',
        hobbies: ['Reading', 'Music', 'Sports']
    }
    
    response.render('profile', {
        person: request.params.name,
        data: data
    });
})

// app.put();

// app.delete();

app.listen(3001, () => {
    console.log('Started my Express Node Server at 3001')
})