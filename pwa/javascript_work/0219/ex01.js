/*
아이스 아메리카노 5,500
머쓱이가 가진 돈 money
최대로 마실 수 있는 아아 잔 수 ,
남는 돈
을 배열로 리턴 !

마실 수 있는 잔 수 와 남는 돈을 담은 배열
5,500 -> [1,0]
15,000 -> [2,4000]

마실 수 있는 잔 수 = money / 5500의 정수 parseInt
남는 돈 = money 5500*정수(잔수)

*/



function solution(money) {
    var answer = [0,0];
    let a = parseInt(money/5500);
    let b =  money - (5500*a);
    answer[0] = a;
    answer[1] = b;
    return answer;
}
console.log(solution(5500));
console.log(solution(12000));
console.log(solution(15000));





// function solution(money) {
//     return [parseInt(money / 5500), money % 5500];
//

// function solution(money){
//     let a = parseInt(money / 5500);
//     let b = money % 5500;
//     return [a, b]
// }