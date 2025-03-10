const person = {
    name : "John",
    age : 20,
    addr : 'seoul'
}

console.log('name' in person); // t name 프로퍼티가 있냐 ?
console.log('age' in person); // t
console.log('addr' in person); // t

console.log('phone' in person); // f

console.log('toString in Object.prototype'); // toString in Object.prototype
console.log('toString' in Object.prototype); // t
console.log('toString in person'); // toString in person
console.log('toString' in person); // t

for(const key in person){
    console.log(key);
}
// name age addr
