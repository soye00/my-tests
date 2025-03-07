function Person(name) {
    this.name = name;
}

const me = new Person('lee');
console.log(me.constructor);
console.log(Person);

/*
const obj = {}; - 객체 리터럴
const add = function (a,b) {return a + b} - 함수 리터럴

🔑 프로토타입은 생성자 함수와 쌍으로 존재


 */

