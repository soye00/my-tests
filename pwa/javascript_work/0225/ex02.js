// 데이터 프로퍼티 어트리뷰트 복습

const obj = {name:'Alice'};

const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc);

Object.defineProperty(obj, 'age',
{ value : 20,
    writable: true,
    enumerable: false,
    configurable: true,
})

console.log(obj.name);
console.log(obj.age);

console.log('----------------');

// enumerable 이 true 인 값만 나열
for (const key in obj){
    console.log(key);
} // > name

