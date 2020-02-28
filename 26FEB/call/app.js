//El método call() llama a una función con un valor this asignado y argumentos provistos de forma individual

//this es una referencia a memoria
//.call - lista de argumentes
//.apply - vector

var obj = {
    name: 'John Doe',
    greet: function(param) {
        console.log(`Hola ${this.name} ${param}`);
    }
}

var param = 'Paleta';
var param2 = 'Cubeta';

obj.greet();
obj.greet.call({name: 'Jane Doe'}, param);
obj.greet.apply({name: 'Jane Doe'}, [param2]);