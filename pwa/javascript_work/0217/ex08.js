const f = (x,y) => x + y;
// const f = (x,y) => x + y; y= y +10; -> 불가능! 함수 몸체에 👉 한줄만 가능
// const f = (x,y) => {x + y}; -> ️🙅‍♂️ {}가 있으면 return 생략 불가 !
// const f = (x,y) => { 🐣 return x + y}; //함수 몸체에 여러줄 가능

const res = f(10,20);
console.log(res);