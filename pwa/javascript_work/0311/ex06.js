const aa = new Number(123.45);

// toFixed 반올림해서 문자열로 반환
const result = aa.toFixed();
console.log(result); // 123
console.log(typeof result); //string

// 래퍼 객체 : 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체
// 자스가 자동으로 원시값을 연관된 객체로 변환 후 다시 원시값으로

const str = 'hello';
console.log(str.length);

str.name = 'lee';
console.log(str.name); // undefined : 다시 원시값으로