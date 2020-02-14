function Greetr() {
    this.greeting = 'Hola 4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;