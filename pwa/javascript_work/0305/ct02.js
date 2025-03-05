/*
머쓱이네 옷가게
10만원 사면 5%
30만원 사면 10%
50만원 사면 20%

구매한 옷의 가격이 주어질 때
지불해야할 금액을 리턴

5% 할인 -> (n / 100) * 5
10 -> (n / 100) * 10
20 -> (n / 100) * 20

리턴 = 구매한 가격 n - 할인금액

 */

// function solution(price) {
//     let sale = 0;
//     if(price >= 100000){
//         sale = ( price / 100) * 5;
//     } if(price >= 300000){
//         sale = ( price / 100) * 10;
//     } if(price >= 500000){
//         sale = ( price / 100) * 20;
//     }
//     sale = Math.floor(sale/10)*10;
//     return price - sale;
// }

/*
10만원 이상 5프로 할인 -> * 0.95
30만원 이상 10프로 할인  -> * 0.9
50만원 이상 20프로 할인 -> * 0.8

 */
// function solution(price) {
//     var answer = 0;
//
//     // 50 만원 이상 20%
//     if (price >= 500000) {
//         answer = Math.floor(price - (price * 0.2));
//     }
//     // 30 만원 이상 10%
//     else if (price >= 300000) {
//         answer = Math.floor(price - (price * 0.1));
//     }
//     // 10 만원 이상 5%
//     else if (price >= 100000) {
//         answer = Math.floor(price - (price * 0.05));
//     }
//     else {
//         answer = Math.floor(price);
//     }
//
//     return answer;
// }

console.log(solution(150000));
console.log(solution(580000));
console.log(solution(3200));
console.log(solution(325550));
console.log(solution(100010));

