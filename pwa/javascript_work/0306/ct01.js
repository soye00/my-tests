/*
잘라서 배열로 저장하기
문자열 my_str 을 n 길이 씩 잘라 저장한 배열을 리턴 !
substring(0,n)
substring(n,n+n)

 */

function solution(my_str, n) {
    var answer = [];
    let left = 0;
    let right = n;
    while (true) {
        const result = my_str.substring(left, right);
        if (result.length < 1) {
            break;
        }else{
            answer.push(result);
        }
        left = left + n;
        right = right + n;
    }
    return answer;
}

console.log(solution("abc1Addfggg4556b",6));
console.log(solution("abcdef123",3));