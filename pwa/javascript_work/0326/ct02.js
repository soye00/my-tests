/*
n의 배수

정수 num 과 n 이 매개변수로 주어질 떄
num 이 n 의 배수이면 1 리턴
n의 배수가 아니라면 0 리턴

배수
num 을 n 으로 나눠서 나머지 0 이면 배수 나머지 있으면 배수 아님
나머지 0 이면 -> 배수  -> 1 리턴
나머지 0 아니면 -> 배수 아님 -> 0 리턴

 */


// function solution(num, n) {
//     var answer = 0;
//     if(num % n === 0) {
//         answer = 1;
//     }else{
//         answer = 0;
//     }
//     return answer;
// }


function solution(num, n) {
    return num%n === 0? 1:0;
}





console.log(solution(98,2));
console.log(solution(34,3));



