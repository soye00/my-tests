const mysymbol1 = Symbol("내꺼");
const mysymbol2 = Symbol("내꺼");

console.log(mysymbol1 === mysymbol2); //f

console.log(mysymbol1); //Symbol()
console.log(mysymbol2); //Symbol()

//Symbol() 은 유일하다

const aa = {};
aa.aaa = 10;
console.log(aa);

String.prototype.aaa = 10;
let a = "abcdef";
console.log(String.prototype.aaa);

a = a.replace(/a/,'aaa');
console.log(a);
console.log(a.aaa);

