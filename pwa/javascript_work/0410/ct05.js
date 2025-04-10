// 정수를 담고 있는 배열의 평균값

function solution(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let answer = (sum / arr.length);

    return answer ;
}

console.log(solution([1,2,3,4]));
console.log(solution([5,5]));
console.log(solution([1,2,3,4,6,7,8,9,10]));