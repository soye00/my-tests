var a = 'cat';
var b = 'dog';

console.log(a && b );

// var c = a && b;
// var d = a || b;
// console.log(c);
// console.log(d);

var c ;
if (a){
    c = b;
}
console.log(c);

var done = true;
var message = '';

if(done) message = '완료';
console.log(message);

console.log(`Boolean('') ${Boolean('')}`); //-> f
console.log(`Boolean([]) ${Boolean([])}`); // ->t
console.log(`Boolean({}) ${Boolean({})}`); // ->t

