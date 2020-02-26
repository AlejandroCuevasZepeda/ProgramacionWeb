var person = {
    fisrtName: '',
    lastName: '',
    greet: function() {
        return this.fisrtName + ' ' + this.lastName;
    }
}

var john = Object.create(person); //Creacion de un objeto
john.fisrtName = 'John';
john.lastName= 'Dos';

var jane = Object.create(person);
jane.fisrtName = 'Jane';
jane.lastName= 'Dos';

console.log(john.greet());
console.log(jane.greet());