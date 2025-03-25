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

/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/
// 4 = 2

// const result = Math.sqrt(4);
// console.log(`result ${result}`);


function solution(n) {
    let count = 0;
    // i가
    // 2 일때 소수
    // 3 일때 소수
    // 4 일떄는 소수가 아님
    // 5 일때는 소수
    // 6 일때는 소수가 아님
    // 7 일때는 소수
    // 8 일때는 소수가 아님 2로 나누어 떨어짐
    // 9 일때는 소수가 아님 3으로 나누어 떨어지기때문에
    // 10일떄도 소수가 아님 2로 나누어 떨어지는데..
    // 11일때는 소수 2,3,5,7로 나우었을때 0으로 안나옴
    // 12일때는 소수가 아님 2
    // 13일떄는 소수 2,3,5,11,13 으로 나우었을때 0으로 안나옴
    // 14 소수가 아님
    //
    // 소수
    const 소수s = [];
    for (let i = 2; i <= n; i++) {
        if (i == 2) { 소수s.push(i); count++; continue; };
        if (i == 3) { 소수s.push(i); count++; continue; };
        let 소수판별 = true;
        const sqri = Math.sqrt(i);

        for (let j = 0; j < 소수s.length; j++) {
            if (소수s[j]> sqri) break; // 제곱근 이상이면 더 이상 확인할 필요 없음
            // 2,3,5,7,11,13으로 나누었을때 0이면 소수가 아니라는 판별
            if (i % 소수s[j] == 0) {
                // console.log(`i = ${i}`);
                // console.log(`소수s[j] = ${소수s[j]}`);
                // 소수가 아니라는게 판별됨.
                소수판별 = false;
                break;
            }
        }
        if (소수판별) {
            소수s.push(i);
            count++;
        }
    }
    return count;
}
// 1~10  2,3,5,7 count = 4 소수는 4개다
console.log(solution(10)); // 4





console.log(solution(10));
console.log(solution(5));
console.log(solution(20)); // 8
console.log(solution(200)); // 46
console.log(solution(10000)); //1229




