function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//var john = new Person('John', 'Doe');
//console.log(john.firstname);

//prototype = agregar funcionalidad/propiedades
Person.prototype.greet = function() {
    console.log('Hola, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();