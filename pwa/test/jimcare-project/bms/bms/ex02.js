// class 선언문
class Person{}

const Person2 = class {};
// 익명 클래스 표현식

const Person3 = class MyClass{};
// 기명 클래스 표현식 

class Person4{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(`hi my name is ${this.name}`)
   }// 프로토타입 메서드


}

const me = new Person4('lee');
console.log(me.name); // > lee
me.sayHi(); // > hi my name is lee 


