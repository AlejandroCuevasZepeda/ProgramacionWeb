//Hoisting is JavaScript's default behavior of moving declarations to the top.

x = 100;
var x;
console.log(x);

//          function () {}        ()=>{}
//Hoisting       Si                 No
//this           Si                 No
//callback       No                 Si


//web server - event emiter
//express es un emisor de eventos