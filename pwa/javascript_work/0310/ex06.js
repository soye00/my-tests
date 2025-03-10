const person = {
    name : "John",
    age : 20,
    addr : 'seoul'
}

console.log(Object.keys(person)); // > [ 'name', 'age', 'addr' ]
console.log(Object.values(person)); // > [ 'John', 20, 'seoul' ]
console.log(Object.entries(person)); // > [ [ 'name', 'John' ], [ 'age', 20 ], [ 'addr', 'seoul' ] ]

// 객체는 for in
// 배열은 for of 로 순회한다.

console.log('.........................')

for (const element of Object.keys(person)) {
    console.log(element);
}

for (const element of Object.values(person)) {
    console.log(element);
}

for (const element of Object.entries(person)) {
    console.log(element);
}
for (const [key, value] of Object.entries(person)) {
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
}

// 디스트럭쳐링 - 배열 분해 , 객체 분해

// const arr = [10,20,30];
// const [ a,b,c ] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
