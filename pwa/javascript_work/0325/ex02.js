// 배열이 일반 객체보다 빠르다

console.time("for arr");

let sum = 0;
for(let i = 0; i<1000000; i++){
    sum = sum + i;
}
console.log(sum);

console.timeEnd("for arr");

console.time("for arr test");

const arr = [];
for(let i = 0; i<1000000; i++){
    arr[i] = i;
}
console.timeEnd("for arr test");

console.time("for obj test");

let obj = {};
for(let i = 0; i<1000000; i++){
    obj[i] = i;
}

console.timeEnd("for obj test");