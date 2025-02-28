const obj = {
    age : 20,
    name : 'John',
    get fullName () {
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}

// console.log(Object.getOwnPropertyDescriptors(obj));

function aa(num){
    console.log('test');
}
// console.log(Object.getOwnPropertyDescriptors(aa));

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));