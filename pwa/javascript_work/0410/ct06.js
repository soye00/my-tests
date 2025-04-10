/*
2*1
2*2
2*3
2*4
2*5
 x= 2 ~n n =5

 */

function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

// n만큼의 배열을 미리 만들고 x로 채워둔 다음 map으로 곱해주기 .. 방법도 있었다.. 


console.log(solution(2,5));
console.log(solution(4,3));
console.log(solution(-4,2));