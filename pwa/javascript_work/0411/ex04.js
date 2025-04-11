const [a,b,c=3] = [1,2];

const [d, e = 20, f = 30] = [1,2,3]; // -> 값이 우선시
const [g, ,h] = [1,2,3]; // 공백은 (2는) 버려짐

console.log(a);
console.log(b);
console.log(c);

console.log(d);
console.log(e);
console.log(f);

console.log(g);
console.log(h);
