// 생성자 함수 new

const obj = new Object(); // const obj = {}; - 객체리터럴
obj.name = 'Lee';
obj.sayHello = function () {
    console.log(`Hello my name is ${this.name}`);
}
console.log(obj);
console.log(obj.name);
obj.sayHello();
