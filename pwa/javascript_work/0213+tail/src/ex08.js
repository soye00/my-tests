// (2 t제곱) * n

// 2*2
//2*2*2
///2*2*2*2
//3**3

// (2**10)*2
//
// 2**t
// function solution(n, t) {
//     return n*(2**t);
// }
//
//
// 10시간 -->>>// 1시간마다 2배 => 1~9시간까지 9번 동안 2배씩 증가된다.
//
// for (let i = 0; i < t; i++) {*
//     i+=1 = i = i+1
//     i*=2 = i = i*2
// }
//
// function solution(n, t) {
//
//     for(;;){
//
//     }
// }
//
//
// for(let i = 0; i< t; i++){
//     n*=2;
//     //n= n*2
// }

function solution(n, t) {
    let answer = n;
    for(let i = 0; i < t; i++){
        answer *= 2
    }
    return answer;
}

