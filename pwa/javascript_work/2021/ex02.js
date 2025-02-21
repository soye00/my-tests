/*
머쓱이네 피자가게 피자를 일곱조각으로 잘라 제공
피자한판은 7조각
모든 사람이 피자를 한 조각 이상 먹기위해 필요한 피자의 수를 리턴 !
모든 사람이 한조각 이상 먹기위해
모든 사람이 피자를 한조각은 먹여야 한다
모든 사람 1판은 7명 가능
7명이 한조각씩 먹기 위해서 최소 한판 필요
1명도 한판
~7명 까지는 한판 7~14까지 두판
15명은 세판
필요한 피자의 수를 리턴  피자 조각 수 = 피자의 수*7
피자 조각 수 > 사람 수

피자의 수 리턴
피자의 수.. 피자의 수 리턴..
피자의 수 !!

피자의 수 는 ..
사람 수 / 7
15 / 7 인데 올림해서 ->3이 나와야 하고
올림 math.ceil

모든 사람이 한조각씩 먹기위해 필요한 피자 수
math.ceil(사람 수 / 7)
사람수 = n

math.ceil(n/ 7)

 */


function solution(n) {
    return Math.ceil(n/7);
}

console.log(solution(7));
console.log(solution(15));
console.log(solution(1));



// function solution(n) {
//     return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
// }


// const solution = (n) => Math.ceil(n / 7)


// function solution(n) {
//     return (n%7 === 0) ? Number.parseInt(n/7) : Number.parseInt(n/7) + 1;
// }