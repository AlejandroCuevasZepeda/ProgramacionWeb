'use strict';

var util = require('util');

class Person{
    constructor() {
        this.badgenumber = '1234';
        this.firstName = 'John';
    }

    greet() {
        console.log(`${this.firstName}: ${this.lastname}`);
    }
}


class Policeman extends Person{
    constructor() {
        super();
        this.badgenumber = '1234';
    }

    mostrarPlaca() {
        console.log(`${this.greeting}: ${data}`);
    }
}


var officer = new Policeman();
officer.greet();
officer.mostrarPlaca();

//Ver video What the heck is th event loop anyway? Philip, tambien visitar el sitio web y hacer algo de eso.