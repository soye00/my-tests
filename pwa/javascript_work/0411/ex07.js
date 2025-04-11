//es5
// const oobj = {aa:10, bb:20};
//
// const aa = oobj.aa;
// const bb = oobj.bb;

//es6
// const obj = {aa:10, bb:20};
// const {aa, bb} = obj;

const {aa:a, bb:b} = {aa:10, bb:20}; //aa 값이 없으면 -> undefined
// aa: a = 10 -> 기본값 설정 가능

console.log(a);
console.log(b);

