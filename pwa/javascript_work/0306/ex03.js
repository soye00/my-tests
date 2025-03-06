// prototype
// const arr = [] => Array.prototype -> Object.prototype
// 연결 됨

// prototype 을 null 지정해서 obj 객체 생성
const obj = Object.create(null);
console.log(obj.__proto__);


// ES5 __proto__ get 메서드 실행 -> prototype
// ES6 getPrototypeOf() prototype 구하는게 더 좋은 방법

const obj2 = {};
console.log(obj2.__proto__);
console.log(Object.getPrototypeOf(obj2));