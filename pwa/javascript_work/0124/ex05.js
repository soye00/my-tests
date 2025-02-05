const a = 65;
const b = 100;

console.log('a===b는 ?');
console.log(a===b); // == -> 비슷한가?(문자'100'=숫자100 true), === 같은가?  -> false

const c = 100;
const d = 100;

console.log('c===d는 ?');
console.log(c===d);  //->true

const e = 10;
const E = 10; // const e const e -> 중복 불가, but 대소문자는 구분 가능 
