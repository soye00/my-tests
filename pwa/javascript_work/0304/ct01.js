/*
정수 number 60, 55
n,m 2,3  10,5 가 주어질 때
number 가 n 의 배수이면서 m의 배수이면 1, 아니면 0
n과 m 의 배수 -> 1



 */

function solution(number, n, m) {
    var answer = 0;
    if( number % n === 0 && number % m === 0 ) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}


console.log(solution(60,2, 3));
console.log(solution(55,10, 5));



//
// function solution(number, n, m) {
//     return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
// }