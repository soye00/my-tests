/*
정수가 담긴 array 배열, 정수 n 주어질 때
array 안에 n 이 몇 개 있는지
-> array 에 n 의 개수 리턴
개수 리턴!

 */

function solution(array, n) {
    var answer = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === n) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([1,1,2,3,4,5],1));
console.log(solution([0,2,3,4],1));


// function solution(array, n) {
//     var answer = array.filter((number) => number === n).length;
//     return answer;
// }