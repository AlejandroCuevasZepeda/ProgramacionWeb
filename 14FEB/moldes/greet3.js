// Clase
function Greetr() {
    this.greeting = 'Hola 3';
    this.greet = function() {
        console.log(this.greeting);
    } 
}

module.exports = new Greetr();