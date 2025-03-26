/*
이어 붙인 수

정수 담긴 리스트 num_list

num_list의 홀수만 이어붙인 수
짝수만 이어붙인 수 => 순서대로 이어 붙이기

홀수와 짝수 이어붙인 수의 합을 리턴

ex) [3,4,5,2,1]
-> 홀수 351 짝수 41 =>393

홀수/짝수 이어붙여서
더하기


 */


function solution(num_list) {
    let odd = num_list.filter(item => item%2 === 0).join('');
    let even = num_list.filter(item => item%2 !== 0).join('');
    return Number(odd) + Number(even);
}

console.log(solution([3,4,5,2,1]));