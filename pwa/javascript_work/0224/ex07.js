const o = {};
o.name = 'lee';
o.age = 20;

const 디스크립터 = Object.getOwnPropertyDescriptor(o, 'name');
console.log(디스크립터); // Object.getOwnPropertyDescriptor 하나만 가져올 때

console.log('=======================');

const 디스크립터s = Object.getOwnPropertyDescriptors(o);
console.log(디스크립터s); // Object.getOwnPropertyDescriptor + s💦 모두 가져올 때