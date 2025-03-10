function Person(name, age){
    this.name = name;
    this.age = age;
}

// Person.prototype.greet = function(){
//     console.log(`hello 나는 ${this.name}`);
// }

Person.prototype = {
    greet(){
        console.log(`hello 나는 ${this.name}`)
    }
}

const p1 = new Person('홍길동', 20);
const p2 = new Person('박길동', 23);

// p1.greet();
// p2.greet();

console.log(p1.constructor); // > [Function: Person]
console.log(p2.constructor); // > [Function: Person]

/*
Person.prototype 안에는 Person constructor 가 원래 있음
하지만 new 연산자로 객체 생성을 하게 되면
자바스크립트 엔진이 자동으로 object constructor 추가 하게 된다. 
 */