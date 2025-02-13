// const x = 1;
// const y = 2;
//
// const obj = {
//     x, //x : x,
//     y // y : y -> 축약표현
// }
// console.log(obj);

var prop = 'prefix';
var obj1 = {};
var i = 0;

obj1[prop+'-'+(++i)] = i; // i++;
obj1[prop+'-'+(++i)] = i;
obj1[prop+'-'+(++i)] = i;

console.log(obj1);