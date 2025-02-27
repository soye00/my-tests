/*
모음 a e i o u
문자열 my_string에서 모음 제거한  문자열을 리턴 !
for -> i 번째 my_string ㅇㅔ서 a e i o u 가 아닌 문자열 리턴
aeiou 아니면 push

문자열 배열 문자열
배열을 문자열로 .join
*/



// function solution(my_string) {
//
//     var answer = '';
//
//     return answer;
// }


function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if(my_string[i] === 'a') {}
        else if(my_string[i] === 'e') {}
        else if(my_string[i] === 'i') {}
        else if(my_string[i] === 'o') {}
        else if(my_string[i] === 'u') {}
        else {
            answer = answer + my_string[i];
        }
    }
    return answer;
}

console.log(solution("nice to meet you"));