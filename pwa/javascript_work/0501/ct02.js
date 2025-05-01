// 약수 구하기

function solution(n) {
    let answer = [];
    let num = Math.ceil(Math.sqrt(n));
    for(let i = 1; i <= num**2; i++) {
        if(n % i === 0) answer.push(i);
    }
    return answer.sort((a, b) => a - b);
}

console.log(solution(24));
console.log(solution(29));


