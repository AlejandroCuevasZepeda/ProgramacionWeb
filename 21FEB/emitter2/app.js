// events de node
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Alguien dijo hola');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Bueno');
});

console.log('Hola');
emtr.emit(eventConfig.GREET);