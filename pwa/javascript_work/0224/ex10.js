const person = {};

person.fName = 'park';

Object.defineProperty(person, 'lName',{
    value : 'guildong',
    writable: true,
    enumerable: false,
    configurable: false,
})

Object.defineProperty(person, 'age', {
    value : '20',
})

const 프로퍼티s = Object.getOwnPropertyDescriptors(person);
console.log(프로퍼티s);

console.log(person.fName);
console.log(person.lName);
console.log(person.age);

person.lName = '동길';
console.log(person.lName); // writable 이 true 일 경우 변경 가능  false 일 경우 무시 

for (const personKey in person) {
    console.log(personKey)
} // enumerable 가 true 일 경우

delete person.lName;
console.log(person.lName); // configurable 가 true 일 경우 삭제