var events = require('events');


// console.log(events);

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (message)=>{
    console.log(`This is a emitted event ${message}`)
});

myEmitter.emit('someEvent', 'My own event in node!!!');
