/*
두수를 입력받아 두수의 최대공약수와 최소공배수를 배열로 반환
[최소공약수, 최소공배수]
배열의 맨 앞에 최대공약수, -> 약수 나머지 0 두수를 동시에 나눌 수 있는 수의 최대
그 다음 최소공배수, 배수 공배수 중에서 가장 작은

최대공약수 * ( 공약수로 나눈 값들 ) = 최대공배수

두수 n 3,  m 12
-> [최소공약수 3, 최대공배수 12]
n 2, m 5
-> [ 1, 10]

45, 63
-> [9, 315]

 */

function solution(n, m) {
    let a = [];
    let answer = [];
    for(let i=0; i<=(m*n) ;i++){
        if(n % i === 0 && m % i === 0 ){
            a.push(i);
        }
    }
    let b = a[a.length-1];
    let c = b * (n / b) *  (m / b) ;
    answer[0] = b;
    answer[1] = c;
    return answer;
}

console.log(solution(3,12));
console.log(solution(2,5));
console.log(solution(45,63));
