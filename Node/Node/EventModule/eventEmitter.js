var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var jeremy = new Person('Jeremy');
var alison = new Person('Alison');
var binod = new Person('BINOD');

var people = [jeremy, alison, binod];

people.forEach( Person => {
    Person.on('says', (message)=>{
        console.log(`${Person.name} says: ${message}`);
    });
});

jeremy.emit('says', 'What\'s Up');
alison.emit('says', 'Enemies Ahead');
binod.emit('says', 'BINOD');
