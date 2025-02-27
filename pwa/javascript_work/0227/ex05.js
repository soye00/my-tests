const a = '10.45';
console.log(typeof a); // > string

const b = Number(a); // new Number(a);
console.log(typeof b); // > number

const c = new String("10.45");
const d = String("10.45");

console.log(c); // > [String: '10.45']

console.log(typeof c); // > object
console.log(d); // > 10.45
console.log(typeof d); // > string

