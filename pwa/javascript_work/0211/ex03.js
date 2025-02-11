var x = 10;
console.log(typeof x);

var y = x.toString();
console.log(typeof y);

console.log(x+y);

var z = '10.5';
console.log(typeof z);

//string -> Number 방법1
var q = Number(z);
console.log(typeof q);
console.log(q);

//string -> Number 방법2
var qq = parseInt(z);
console.log(typeof qq);
console.log(qq);