let a = 10;
a = 20;

const b = 20;
// b = 30;  -> E : 원시값 변경 불가

const c = { a : 20, b : 40 };
c.a = 10; //-> 객체값(array,object,function)은 변경 가능 🤍

//c = 40; -> E 객체를 원시값으로 변경 불가 !

console.log(c);

