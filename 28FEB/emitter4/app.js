'use strict'; //Pone el complidor en modo estricto

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter{
    constructor() {
        super();
        this.greeting = 'Hola';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

/*function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hola';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}*/

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Alguien dice Buenas: ', data);
});

let data = 'Tony';
greeter1.greet(data);