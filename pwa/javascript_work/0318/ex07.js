// 클래스 호이스팅
// console.log(car); // > 에러

class Car {
    constructor(name, type) {
        this.name = name;
    }
}

const a = class AA{};
const f = function aa(){};

new a();
f();
// aa(); -> X


class Person{
    age = 10; // 프로퍼티는 외부에서 선언가능
    constructor(name) {
        this.name = name;
    }
}

const me = new Person('lee');
console.log(me);


