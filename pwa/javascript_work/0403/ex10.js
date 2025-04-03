const str = 'abcdefg';

// console.log(str.reverse());// ⭐reverse -> string 프로토타입 X -> ⭐배열 프로토타입 O

const arr = str.split('').reverse(); // 문자열 -> 배열 -> reverse
console.log(arr);

console.log(arr.join('')); // -> 다시 문자열로 변환
