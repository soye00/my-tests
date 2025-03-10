function Person(){

}

const me = new Person();
const parent = {};

// 프로토타입 연결 변경 방법 1. __proto__ 2. setPrototypeOf
Object.setPrototypeOf(me,parent);

console.log(me instanceof Person); // > f
console.log(me instanceof Object); // > t : person 에서 parent 로 변경(?)됨 