// function solution(n) {
//     let prs = []; // 소수를 저장할 배열
//     // 2부터 n까지 소수 판별
//     for (let num = 2; num <= n; num++) {
//         let isPrime = true; // 소수 여부 플래그
//         const limit = Math.floor(Math.sqrt(num)); // 제곱근 상한선
//         for (let divisor = 2; divisor <= limit; divisor++) {
//             if (num % divisor === 0) {
//                 isPrime = false; // 약수가 있으면 소수 아님
//                 break; // 더 확인할 필요 없음
//             }
//         }
//         if (isPrime) {
//             prs.push(num); // 소수면 추가
//         }
//     }
//     return prs.length; // 소수 개수 반환
// }
//
// console.log(solution(5)); // 출력: 3 (소수: 2, 3, 5)
// console.log(solution(20)); // 출력: 8 (소수: 2, 3, 5, 7, 11, 13, 17, 19)
