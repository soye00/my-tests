var a = 10;
console.log(typeof a);


//number -> string 방법1
var b = a.toString();
console.log(typeof b);

//number -> string 방법2
var c = String(b);
console.log(typeof c);


//number -> string 방법3
var d = 10;

var e = d+ '';
console.log(e);
console.log(typeof e);