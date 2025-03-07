function Person(name){

}

const Person2 = name => {
    this.name = name;
}

// console.log(Person.prototype);  // > {} 빈객체
// Person.prototype 소유 O


console.log(Person2.prototype);  // > undefined
// 화살표 함수는 Person2.prototype 소유 X ->
// 📌 Person2.prototype 안에 constructor 있음
// -> Person2 는 constructor 없음 = new 생성자 사용 X


// class

class Person3{
    constructor(){
        this.x = 10;
        this.y = 20;
        console.log('test');
    }
}
const p1 = new Person3();
console.log(p1);


/*
모든 빌트인 생성자 함수

 */