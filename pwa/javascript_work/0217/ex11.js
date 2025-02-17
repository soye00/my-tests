function add(x,y,z){
    console.log(arguments); // arguments : 유사배열구조 [0]번째에 -> x,...
    return x+y;
}
add(10,20,30);



/*
양꼬치 n 인분 음료수 k개
양꼬치 12,000원 음료수 2,000원
12,000*n 2000*k
10인분 음료수 1개 서비스 -2,000(10인분 마다)
(12,000*n 2000*k) -2,000*()
 */

function solution(n,k){
    return n*12000+k*2000- parseInt(n/10)*2000
}
console.log(solution(10,3));


/*
정수 n, n 이하의 짝수를 모두 더한 값 return;
이하의 i<=n 짝수 i = i+2
ex) n = 10, 2+4+6+8+10 = 30
*/

function solution2(n){
    var sum = 0;
    for(let i =0; i<=n; i+=2){
        sum = sum + i;
    }
    return sum;
}
console.log(solution2(10));

/* 정수배열 numbers, numbers 원소 두개 곱해 만들 수 있는 최대값 return
 만들 수 있는 최대값 = 최대값 * 두번째 최대값
 ex) [1,2,3,4,5] -> 4*5 =20
 최대값 = numbers 의 0번째 부터 length 번째 까지 비교해서 찾아 넣기
 if 0번째 보다 i번째가 클때 -> 최대값으로 -> 기존 최대값은 두번째 최대값으로
 max 2 를 max 1 에 대입해두고 , i 번째를 max 1 으로 대입
    2.
 */

function solution3(numbers){
    let max1 = numbers[0];
    let max2 = numbers[1];
    for(let i = 1; i < numbers.length; i++){
        if(max1 < numbers[i]){
            max2 = max1;
            max1 = numbers[i];
            }if(max1 > numbers[i] && max2 < numbers[i]){
            max2 = numbers[i];
            }
        }
    return max1*max2;
}

console.log(solution3([1,2,3,4,5]));