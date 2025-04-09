const arr = [1,2,3,4];
//Array.prototype[Symbol.iterator]
// 함수 호출하면 next 가 함수로 구현되어진 객체 반환

const iter = arr[Symbol.iterator]();

console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
