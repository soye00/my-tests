//소수 찾기
/*
입력받은 숫자 n 사이에 있는 소수의 개수를 리턴.
소수의 개수.
소수는 1과 자기 자신으로만 나누어지는 수 & 1은 소수 아님

number n -> [] 배열로 담아서 -> 개수를 리턴

n 사이에 소수의 개수를 구하기
소수.. 1과 자기자신으로만 나ㅇ너어아너아ㅣ러너정ㄴ아티라ㅓ컬ㅇㄹ
제곱근 까지 수로 나눠보기


 */

// console.log(Math.sqrt(10)); //3.16
// // 10을 ~3까지 수로 나누어 떨어지는 수 있으면 -> 소수아님
//
// let a = [2,3,4,5]
// 200 을 ~14 까지 수로 나누어 떨어지는 수 없으면 소수

// console.log(Math.floor(3.12345));
// console.log(Math.ceil(3.12345));
//
//
//
function solution(n){
    let prs = [];
    for(let i = 2; i <= n; i++){
        let isPrime = 1;
        const sq = Math.floor(Math.sqrt(i));
        for(let j = 2; j <= sq; j++){
            if(i % j ===0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime){
            prs.push(i);
        }
    }return prs.length
}
console.log(solution(10)); // > 4
console.log(solution(5)); // > 3
console.log(solution(6));
console.log(solution(700));















// function solution(n) {
//     var answer = [];
//     let root = Math.floor(Math.sqrt(n)); //
//     for(let i = 0; i <= root; i++){
//         for(let j = 0; j <= root; j++){
//             if(n % (i*j) === 0){}
//             else{}
//         }
//     }
//
//     return answer;
// }