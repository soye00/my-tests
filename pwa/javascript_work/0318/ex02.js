/*
# : Person 클래스 내부에서는 사용가능
# 외부에서는 접근 하는 순간 에러
캡슐화 정보은닉

 */
class Person{
    constructor(name,age){
        this.name = name;
        this.#age = age;
    }

    sayHi(){
        console.log(`this.name ${this.name} this.#age${this.#age}`);
    }
}

const me = new Person("lee",20);
me.sayHi();

console.log(me.name);
// console.log(me.#age); // 접근 허용 x -> 에러 발생