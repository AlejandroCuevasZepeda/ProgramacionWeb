// events dentro de emitter.js
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Alguien dijo hola');
});

emtr.on('greet', function() {
    console.log('Bueno');
});

console.log('Hola');
emtr.emit('greet');