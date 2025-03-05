// const person1 = {
//     name: "John",
//     age: 5,
// }
//
// const person2 = {
//     name: "John2",
//     age: 5,
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}
function aa(){}

const person1 = new Person("kim", "20");
const person2 = new Person("lee", "20");
const person3 = new Person("choi", "20");

console.log(person3);
console.log(person2);

//인스턴스 확인: 생성된 객체는 👉instanceof 연산자를 사용하여 특정 생성자 함수의 인스턴스인지 확인 가능
console.log(person1 instanceof Person); // > true
console.log(person1 instanceof aa); // > false


// const test = {};
// test {};
// new test(); // > 에러

function test(){}
test();
new test(); // > call, construct 호출, new객체 생성 가능
