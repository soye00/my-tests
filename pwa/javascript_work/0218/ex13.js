
//문자열을 뒤집은 문자열
//문자열.. 뒤집어.. 문자열로..
//문자열 문자열 문자열 문자열 뒤집어 .. 문자열을 뒤집어
//뒤에서부터 하나씩 넣기?
//맨앞 맨뒤 둘씩 자리 바꾸기?


function solution(my_string) {
    var answer = '';
    for(let i = my_string.length - 1; i >= 0; i -= 1) {
        answer += my_string[i];
    }
    return answer;
}

console.log(solution("jaron"));
console.log(solution("bread"));


