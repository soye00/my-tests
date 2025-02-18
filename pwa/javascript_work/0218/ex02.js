// 1/2 + 3/4 = 5/4


function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var max = denom1 * denom2;
    var i = 2;
    while (i<=max){
        if (i%denom1 === 0 && i%denom2 ===0){
        break;
        }
        i++;
    }
    return answer;
}

console.log(solution([1,2,3,4]));