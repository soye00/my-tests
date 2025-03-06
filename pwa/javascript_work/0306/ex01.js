function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        console.log(`name = ${name} age = ${age}`);
    }
}

console.log(Person.prototype);

// > 내가 수정 할 수 있는 prototype 에 print 함수 추가
// 💎 상속에 의한 메서드 공유

Person.prototype.print = function () {
    console.log(`name = ${this.name} age = ${this.age}`);
}
console.log(Person.prototype);

const p1 = new Person('홍길동', 20);
p1.print();
const p2 = new Person('박길동', 30);
p2.print();
const p3 = new Person('동길홍', 25);
p3.print();



console.log(p1.print === p2.print); // > f


