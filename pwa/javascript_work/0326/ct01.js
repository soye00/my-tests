/*

제곱수 판별하기

제곱수라면 1 리턴 아니면 2 리턴


let a = 144; // > 12
let b = 20;  // 4.47213595499958

console.log(Math.sqrt(a));
console.log(Math.sqrt(b));


가 정수이면 제곱수  => 1 리턴
정수가 아니면 제곱수 아님 => 2 리턴



 */


// let a = 144; // > 12
// let b = 20;  // 4.47213595499958
//
//
// let c = Math.sqrt(a);
// console.log(Number.isInteger(c));
//
// console.log(Math.sqrt(a));
// console.log(Math.sqrt(b));


function solution(n) {
    let answer = 0;
    if(Number.isInteger(Math.sqrt(n))){
        answer = 1;
    }else{
        answer = 2;
    }
    return answer;
}

//
// function solution(n) {
//     return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }

console.log(solution(144));
console.log(solution(946));
console.log(solution(456));