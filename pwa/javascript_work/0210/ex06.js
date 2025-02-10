//for, while 0~5까지 출력하는
console.log("for 실행");
for (let i = 0; i <=5; i++) {
    console.log(i);
}
// console.log(`i = ${i}`); //=> 에러 i는 {}안에서만 정의됨
// console.log("for 실행");
// let i = 0;
// for (; i <=5; i++) {
//     console.log(i);
// }
// console.log(i); // => 초기값을 밖으로-> 가능

console.log("while 실행");
let ii = 0; // 초기값 미리 설정
while (ii<=5) {
    console.log(ii);
    ii++;
}

console.log(`ii = ${ii}`);
