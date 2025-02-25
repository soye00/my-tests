/*
정수 배열 numbers 정수 num1, num2가 매개변수
배열의 [num1]~[num2]번째 인덱스까지 자른
정수 배열을 리턴 !
넘1부터 넘2까지 [넘1, ... ,넘2]
[1,2,3,4,5] num1 = 1, num2 = 3
=> num1 = 1 => numbers[1] = 2 여기부터
=> num2 = 3 => numbers[3] = 4 여기까지
return [2,3,4]
여기부터 numbers[num1]부터
여기까지 numbers[num2]까지

 */





function solution(numbers, num1, num2) {
    var answer = [];
    for( let i = num1; i <= num2 ; i++ ) {
        answer.push(numbers[i]);
    }
    return answer;
}

console.log(solution([1,2,3, 4, 5],1,3));


// for( let i=0; i >= num1 && i <= num2 ; i++ ) {
//      answer += (numbers[i]);
//  }

//❔❓ slice ?
// function solution(numbers, num1, num2) {
//     let result = numbers;
//
//     return numbers.slice(num1,num2+1);
// }
//
// function solution(numbers, num1, num2) {
//     return numbers.splice(num1, num2-num1+1);
// }