console.log(...[2,3,4]); // > 2 3 4 문자열
console.log([...[2,3,4]]); // >[ 2, 3, 4 ] 배열

const arr = [1, 2, 3];
const brr = [4, 5, 6];
console.log(...arr , ...brr); // > 1 2 3 4 5 6
console.log([...arr , ...brr]); // > [ 1, 2, 3, 4, 5, 6 ]



console.log(...'hello');

// map 사용하면 length 프로퍼티 있고 Symbol.iterator
const map = new Map([
    ["a",1],
    ["b",2],
]);

console.log(map);
console.log(...map);

const set = new Set([1,2,3,4,5,6,7,8,9,10]);
console.log(set);
console.log(...set);

// console.log(...{a:1, b:2}); //이거는 안됨
console.log({...{a:1, b:2}}); // 이거는 됨