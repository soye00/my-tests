
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.print = function(){
    console.log(`name = ${name} age = ${age}`)
}

const p2 = new Person('홍길동', 20);
const p3 = new Person('박기롱', 30);
const p4 = new Person('이길동', 25);


console.log(p2.print === p3.print); // > t => 참조값의 비교
// print 라는 함수를 가리키는
