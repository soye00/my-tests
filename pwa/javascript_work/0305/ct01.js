/*
이진수 더하기
이진수를 의미하는 두 개의 문자열 주어질 때
두 이진수의 합을 리턴
10 11 -> 101
1001 1111 11000
2진수는 2가 되면 앞에 1을 넘겨줌

00 -> 0
01 -> 1
11 -> 2(+1) -> 0


2진수를 10진수로 바꾸고
10진수를 다시 2진수로 바꾸기 ( 00 -> 00아니고 0으로 )
 */


function solution(bin1, bin2) {
    const arr = bin1.split('');
    const brr = bin2.split('');
    let num1 = 0;
    let j = 0;
    for(let i = arr.length-1 ; i > -1; i--) {
        num1 = num1 + arr[i]*(2**j);
        j++;
    }
    let num2 = 0;
    j=0;
    for(let i = brr.length-1; i > -1; i--) {
        num2 = num2 + brr[i]*(2**j);
        j++;
    }
    let result = num1 + num2;

    let mod = '';

    do{
        mod = result % 2 + mod ;
        result = Math.floor(result % 2);
    } while (result > 1)

    var answer = result + mod;
    if(bin1 ==='0'&& bin2 ==='0'){
        answer = '0';
    }
    return answer;
}

console.log(solution('10', '11'));