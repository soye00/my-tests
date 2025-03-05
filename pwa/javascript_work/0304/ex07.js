const obj = { name: "Alice" };

// 기본적으로 프로퍼티 어트리뷰트를 확인할 수 있음
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
/*
출력 결과:
{
  value: "Alice",
  writable: true,  // 변경가능하다
  enumerable: true,  // for in
  configurable: true  // 삭제 가능하다
}
*/


Object.defineProperty(obj, 'age',{
    value : 20,
    writable : true,
    enumerable : true,
    configurable : true,
})

console.log(obj.age);
obj.age = 30;
console.log(obj.age);




// obj.age=20;

// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);

// console.log(Object.keys(obj));

//
// for (const Key in obj) {
//     console.log(`key: ${Key}`);
// }
