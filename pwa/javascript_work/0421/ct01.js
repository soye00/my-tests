/*
최댓값 만들기
배열 원소 중 두개를 곱해 만들 수 있는 최댓값을 리턴
a[0] < 0 && a[1] < 0 ? answer = a[0] * a[1] : answer = a[a.length-1] * a[a.length-2];

 */



function solution(numbers) {
    let answer = 0;
    let a = numbers.sort((a, b) => a - b);
    a[0]*a[1] > a[a.length-1]*a[a.length-2] ? answer = a[0]*a[1] : answer = a[a.length-1]*a[a.length-2]
    return answer;
}

console.log(solution([1, 2, -3, 4, -5])); // >15
console.log(solution([0, -31, 24, 10, 1, 9])); // > 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(solution([-1,-1,5,5]));

//
// //
// //
// //
// let a = [1, 2, -3, 4, -5];
// console.log(a.sort((a, b) => a - b));
