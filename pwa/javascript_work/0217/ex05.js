const a = {x : 10};
const b = {x : 10};

console.log(a === b); // 👉 f
console.log(a === a); //t

console.log(a.x === b.x); // 👉 t-> 원시값 비교