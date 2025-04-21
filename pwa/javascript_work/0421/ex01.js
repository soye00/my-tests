// 교집합

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// filter : t 값 배열로 return
const res = [...A].filter(i => B.has(i));
console.log(res);

// 합집합 => set : 중복 제거
const Union = new Set([...A,...B]);
console.log([...Union]);

// 차집합
const differ = [...A].filter(i => !B.has(i));
console.log(differ);


