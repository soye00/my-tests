var person = {
    name: "John",
    sayHello: function() {
        console.log(`hi my name is ${this.name}`);
    }
};

// -> 식별자네이밍 규칙 준수 : a-a 사용 x --> 'a-a'로 사용 => console.log(person['a-a']);

console.log(typeof person);
console.log(person);

person.sayHello();

var empty = {};
console.log(empty);
console.log(typeof empty);