function Person(name){
    this.name = name;

}

Person.prototype.sayHello = function(){
    console.log(`나는 프로토타입 헬로우 ${this.name}`);
}

const me = new Person('park');

me.sayHello = function (){
    console.log(`나는 인스턴스 헬로우 ${this.name}`);
} //  프로토타입 체인 갈 필요 X : 먼저 사용됨(프로토타입 헬로우 실행X)

me.sayHello();