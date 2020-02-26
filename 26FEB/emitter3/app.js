var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hola';
}

util.inherits(Greetr, EventEmitter); //El emisor de eventos se dispara en la funcion

//Greetr.prototype.greet = function() {
//    console.log(this.greeting);
//    this.emit('greet');
//}

//var greeter1 = new Greetr(); //Nueva instancia

//greeter1.on('greet', function() {
//    console.log('Alguien dice Buenas');
//});

//greeter1.greet();

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Alguien dice Buenas:', data);
});

greeter1.greet('Tony');