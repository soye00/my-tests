function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function (){
    console.log(`hi ${this.name}!`);

}
const me = new Person('lee');
me.sayHi();
const you = new Person('park');
you.sayHi();

/*
Person prototype 안 constructor => new 생성자 생성 = me
me 객체 생성 -> name 프로퍼티 : lee -> Person.prototype 연결 : sayHi 존재
-> Object.prototype 연결 ( hasOwnProperty - me.hasOwnProperty 가능) -> null 연결

프로토타입 체인
-> 상속과 프로퍼티 검색을 위한 매커니즘
=> 메모리 낭비 줄이기   = 속도 개선 

 */