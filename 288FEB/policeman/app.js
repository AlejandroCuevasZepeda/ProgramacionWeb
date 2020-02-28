var util = require('util');

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function() {
    console.log(`Hola ${this.firstName} ${this.lastName}`);
}

function Policeman() {
    Person.call(this); //Sin esta linea no se puede imprimir el nombre y apellido
    this.badgenumber = '1234';
}

Policeman.prototype.mostrarPlaca = function() {
    console.log(`Placa: ${this.badgenumber}`);
}


util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
officer.mostrarPlaca();