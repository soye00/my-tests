// 캡슐화와 정보은닉
function Person(name, age) {
    this.name = name;
    let _age = age;
    this.sayHi = function (){
    console.log(`this.name = ${this.name} _age ${_age}`)
    }
    this.setAge = function (age){
        {if(age <0) console.log(`no`);

    }
}

const me = new Person("lee",20);
me.sayHi();

const you = new Person('kim',30);
you.sayHi();

console.log(`me.name = ${me.name}`);
console.log(`me.age = ${me._age}`)