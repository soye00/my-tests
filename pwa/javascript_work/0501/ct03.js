// 정수 내림차순으로 배치하기

function solution(n) {
    let num = n.toString().split('').map(Number);
    return parseInt(num.sort((a, b) => b - a).join(''));

}

console.log(solution(118372));