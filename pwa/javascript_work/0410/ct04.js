/*
정수 num 짝수 -> Even
홀수 -> Odd
 */

function solution(num) {
    let answer = '';
    num % 2 === 0 ? answer = "Even" : answer = "Odd";
    return answer;
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));