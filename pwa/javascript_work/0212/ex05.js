//null 병합 연산자 ->??
//? -> 옵셔널체이닝

var a;  //a=undefined
var b = a?? '기본 문자열';
console.log(b);

var c = '';
var d = c ?? '기본 문자열';

console.log(`d = ${d}`);