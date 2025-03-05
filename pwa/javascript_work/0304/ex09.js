function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person의 프로토타입에 의사 메서드 추가
Object.defineProperty(Person.prototype, "greet", {
    get() {
        return () => `Hello, my name is ${this.name}`;
    }
});

const p = new Person("Emma");
// console.log(p.greet()); // "Hello, my name is Emma"


const person1 = new Person("Emma", 20);
console.log(person1);

const person2 = new Person("Emma2", 20);
console.log(person2);