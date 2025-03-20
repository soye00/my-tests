// 소수 찾기

/*
1 부터 입력받은 숫자 n 사이에 있는 소스의 개수를 리턴!
소수 = 1과 자기 자신으로만 나누어지는 수 / 1은 소수 X

1~ n 까지 숫자 중 소수의 개수를 리턴...


 */

// function solution(n) {
//     var answer = 0;
//     for (let i = 2; i <= n; i++) {
//         if(i ===2) {answer++; continue;}
//         if(i ===3) {answer++; continue;}
//
//         if(i % 2 === 0 || i%3 === 0 || i%5 === 0 || i%7 === 0 ) {answer++;}
//     }
//     return answer;
// }


/*
소수로 나눠서 나머지가 0 이면 소수가 아님

소수가 아닌 수를 제거 하고
카운팅

소수가 아닌수를 제거 = 소수로 나누어 떨어지는 값을 제거

Math.sqrt()

 */


//
// function solution(n) {
//     var answer = 0;
//     for (let i = 2; i <= n; i++) {
//         if(i ===2) {answer++; continue;}
//         if(i ===3) {answer++; continue;}
//
//         if(i % 2 === 0 || i%3 === 0 || i%5 === 0 || i%7 === 0 ) {answer++;}
//     }
//     return answer;
// }


/*

제곱근으로 나누어 떨어지는 숫자를 제외한 개수

1~ n 까지
배열로 만들고?

 */

function solution(n) {
    var answer = [];
    let root = Math.floor(Math.sqrt(n)); //
    for(let i = 0; i <= root; i++){
        for(let j = 0; j <= root; j++){
            if(n % (i*j) === 0){}
            else{}
        }
    }

    return answer;
}




console.log(solution(10));
console.log(solution(5));
console.log(solution(20)); // 8
console.log(solution(200)); // 46
console.log(solution(10000)); //1229




