var a = 80;
var b = a;

a = 100;

console.log(a);
console.log(b);

//객체타입 : 화살표(?)로 생각해 d가 새로운 공간 x d도 c 를 가리키는 화살표 => 값 변함.
var c = {x:10};
var d = c;

c.x = 20;

console.log(c); //-> 20
console.log(d); //-> 20