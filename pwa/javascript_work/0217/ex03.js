const name = '홍길동';
const age = 50;

const person = {
    name, // = name : name,
    age //= age : age,
}

const person2 = person; // ->값 바뀌면 같이 바뀜
const person3 ={...person};

person.name = '박길동';

console.log(person);
console.log(person2)
console.log(person3);


