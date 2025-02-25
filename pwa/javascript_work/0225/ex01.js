/*
1+2+3+4 10

 */
// 정수를 배열로 -> 각 배열의 합 구하기
/*
function solution(n) {
    n = n + ''; // n = n.toString
    const arr = n.split('');
    const brr = arr.map(item => Number(item));

    const answer = brr.reduce((a,b)=>a+b,0);
    return answer;
}


*/

function solution(n){
    n = n + '';
    const answer = n.split('')
        .map(item => Number(item))
        .reduce((a, b) => a + b,0);
    return answer;
}

/*

function solution(n) {
    var answer = 0;
    let str = String(n);
    for (let i =0; i <str.length; i++) {
      answer += Number(str[i]);
    }
    return answer;
}


 */


console.log(solution(1234));
console.log(solution(930211));



