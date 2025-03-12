const person = {
    name : "John",
    getName (){
        return this.name;
    }
}

// console.log(person.getName());

const a1person = {
    name : 'kim'
}
a1person.getName = person.getName;

console.log(a1person.getName());

const cc = person.getName;
console.log('일반함수로 호출될때는 this 가 전역객체' + cc());