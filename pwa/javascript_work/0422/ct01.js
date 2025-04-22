
// 최대값 만들기(2)
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값 완성

function solution(numbers) {
    var answer = 0;
    var answer2 = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] !== numbers[j]) {
                answer = numbers[i] * numbers[j];
                if (Math.sign(answer) === 1) {
                    // answer2 = Number(answer.toString().split().sort((a,b)=>a-b).join(''));
                    answer2.push(answer);
                }
            }
        }
    }
    // console.log(answer2);
    return answer2.reduce((a, b) => Math.max(a, b));
}

console.log(solution([0, -31,-31, 24, 10, 1, 9]));
console.log(solution([-1,-1,3,4,5,6,7]));
console.log(solution([5,0,-1,-1,2,0]));



// let a = 1;
// let b = -3;
// let c = [1,2,3,4,5,6,7];
// console.log(Math.sign(a));
// console.log(Math.sign(c));



