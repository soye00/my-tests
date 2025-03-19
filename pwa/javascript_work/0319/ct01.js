// 이상한 문자 만들기

/*

function solution(s) {
    var answer = '';
    const a = s.split(' ');
    for(let i = 0; i < s.length; i++) {
        if(i % 2 === 0){
            answer += s[i].toUpperCase();
        }else{
            answer += s[i];
        }
    }
    return answer;
}

 */

function solution(s) {
    let answer = '';
    const a = s.split(' ').map(num => {
        return num.split('').map((num,i) => {
            return i % 2 ===0 ? num.toUpperCase() : num.toLowerCase();
        }).join('');
    });
    answer = a.join(' ');
    return answer;
}



console.log(solution("try hello world"));
console.log(solution("hi my name is"));
