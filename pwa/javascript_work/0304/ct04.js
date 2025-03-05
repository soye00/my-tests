/*
중앙값 구하기

중앙값은 주어진 값들을 크기 순선대로 정렬했을 때 가장 중앙에 위치하는 값 의미
배열 [1,2,7,10,11]의 중앙값으 7 리턴
정수 배열 array 가 주어질 때 중앙값을 리턴하도록
중앙값
크기 순서대로 정렬
중앙값 = 5개중에 3번째
3개중에 2번째
10개중에 12345678910 -?

>>>> array 의 길이는 홀수로 제한!

9개중에 123456789 5번째
5/2 +1
3/2 +1
9/2 +1
-> n/2 +1

(5+1)/2
(n+1)/2

12345 lenth 5 +1 6 = 3
5-1= 4 / 2 => 2
index 2
1234567 lenth 7
index 4

 */

function solution(array) {
    var answer = array.sort((a,b) => a-b);
    return answer[(answer.length-1)/2]
}

console.log(solution([1,2,7,10,11]));
console.log(solution([9,-1,0]));



// function solution(array) {
//   return array.sort((a, b) => a - b)[🎀Math.floor(array.length / 2)];
// }