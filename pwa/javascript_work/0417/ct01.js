/*

자연수 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x
가장 작은 자연수


 */

function solution(n) {
    let answer = [];
    for(let i = 1; i <=n; i++ ){
        if(n % i === 1){
            answer.push(i);
        }
        answer.sort((a, b) => a - b);
    }
    return answer[0];
}

console.log(solution(10));
console.log(solution(12));