// La funciones de JS son First Class

// Funcion: Todo
var greet = require('./greet');
greet();

// Metodo: Solo greet
var greet2 = require('./greet2').greet;
greet2();

// Objeto: Acceder mediante notacion de punto
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Hola Cambiado';

var greet3b = require('./greet3');
greet3b.greet();

// Costructor
var Greet4 =  require('./greet4');
var grtr = new Greet4();
grtr.greet();