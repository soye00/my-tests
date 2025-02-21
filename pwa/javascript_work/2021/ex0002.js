/*
정수 n과 정수배열 numlist 주어질 때
numlist 에서 n의 배수가 아니니 수들을 제거한 배열
-> n의 배수만 출력
-> n의 배수가 아니면 출력 x
n의 배수 = n으로 나누어 나머지 0


 */

function solution(n, numlist) {
    var answer = [];
    for(let i = 0; i < numlist.length; i++) {
        if(numlist[i]%n === 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}

console.log(solution(3,[4,5,6,7,8,9,10,11,12]));
console.log(solution(5,[1,9,3,10,13,5]));


// //💚filter
// function solution(n, numlist) {
//     return numlist.filter(num => num % n === 0);
// }