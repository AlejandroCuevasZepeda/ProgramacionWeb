//object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var obj = {
    a: function() {console.log('Buenos dias')}
}

var f = 'a';
obj[f]();

var obj = {
    greet: 'Hello',
    greetr: function () {
        console.log('Hola desde la funcion')
    }
}

var selection = 'greetr';
obj[selection]();

//functions and arrays
var arr = [];

arr.push(function() {
    console.log('Hola 1');
});
arr.push(function() {
    console.log('Hola 2');
});
arr.push(function() {
    console.log('Hola 3');
});

arr.forEach(function(item) {
    item();
});