console.log(`a=${a}`); // undefined (호이스팅 발생)
let b = 20;
console.log(`b=${b}`);
var a = 10;


console.log(b); // 20

const c = 30;
console.log(c); // 30

// let과 const는 호이스팅되지만, 초기화 전에 사용하면 에러 발생

