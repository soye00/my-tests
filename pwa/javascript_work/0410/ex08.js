const obj = { a:10, b:20};
const copy = obj;

obj.a = 30;
console.log(obj);
console.log(copy);

const obj2 = { a:10, b:20};
const num = {...obj2};
num.a = 40;
console.log(obj2);
console.log(num);