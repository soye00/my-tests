/*
정수 n이 주어질 때
n 이하의 홀수 오름차순 배열 리턴
정수 10
10이하의 홀수 1,3,5,7,9 를 오름차순으로 배열로 리턴

 */






function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i = i+2){
        answer.push(i);
    }
    return answer.sort((a,b) => a-b);
}

console.log(solution(10));
console.log(solution(15));
