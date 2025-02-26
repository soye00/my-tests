function person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}

const p1 = new person('홍길동',20);
console.log(p1); // person { name: '홍길동', age: 20, print: [Function (anonymous)] }
console.log(p1.print()); //이름 홍길동 나이 20

const p2 = new person('박길동',30);
console.log(p2); // person { name: '박길동', age: 30, print: [Function (anonymous)] }
console.log(p2.print()); // 이름 박길동 나이 30
