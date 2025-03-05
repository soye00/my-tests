const p1 = {
    name : '홍길동',
    age : 18,
    print(){
        console.log(`name = ${name} age = ${age}`);
    }
}


function Person(name, age){
    this.name = name;
    this.age = age;
    this.print = function (){
        console.log(`name = ${name} age = ${age}`);
    }
}

const p2 = new Person('홍길동', 20);
const p3 = new Person('박기롱', 30);
const p4 = new Person('이길동', 25);


console.log(p3.print === p2.print); // > f -> 메모리 낭비
