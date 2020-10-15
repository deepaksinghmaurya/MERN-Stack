const mongoose = require('mongoose');

// DB connection - mongodb://<host>/<databaseName>


//ES6 Promise
mongoose.Promise = global.Promise;

let dbString = 'mongodb://localhost:27017/learningMongo';

before((done) => {
    mongoose.connect(dbString, { useNewUrlParser: true,  useUnifiedTopology: true });

    mongoose.connection.once('open', () => {
        console.log('Connection is successful. MongoDb connected.....');
        done();
    }).on('error', (error) => {
        console.log('Connection error:', error)
    }); 
})

// drop the instances before each test.
beforeEach((done) => {
    // mongoose.connection.collections.gotchars.drop( () => {
    //     done();
    // })
    mongoose.connection.collections.people.drop( () => {
        done();
    })
});