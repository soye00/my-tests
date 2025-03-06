const child = {a: 10};
const parent = {x: 1};

console.log(child.__proto__); // > [Object: null prototype] {}

child.__proto__ = parent; // child prototype 가 parent 가리킴

console.log(child.__proto__); // > { x: 1 }
console.log(parent.x);
console.log(child.x); // > 1

console.log(parent.x === child.x); // > t 상속관계

console.log(child.hasOwnProperty('a')); // t
console.log(child.a); // child 는 child & parent 👉 둘 다 사용가능
console.log(child.hasOwnProperty('x')); // f 🧡 상속관계는 사용은 가능하지만 소유하지는 않는다.

// 모든 객체는 Object.prototype 의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
