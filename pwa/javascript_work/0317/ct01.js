/*
가장 가까운 같은 글자
문자열 s 가 주어졌을 때
s의 각 위치마다(각 인덱스 마다 [0] ~ [length-1]) 자신보다 앞에 나왔으면서,
자신과 가장 가까운 곳에 있는 같은 글자가 어디에 있는지
왼쪽부터 오른쪽으로 읽어 나가면서 앞에 같은 글자가 없으면 -1로 표현

ex) s = "banana"

lastFindindexOf



 */


let a = "bcdabcd"
console.log(a.indexOf('a')); // > 3



// function solution(s) {
//     let answer = [];
//     for (let i = 0; i < s.length; i++) {
//         answer.push(s.substr(i,1));
//     }
//     return answer;
//
// }

function solution(s) {
    let answer = [];
    const answer1 = [];
    for (let i = 0; i < s.length; i++) {
        const lang = answer1.lastIndexOf(s.substr(i,1));
        answer1.push(s.substr(i,1));

        if (lang === -1) {
            answer.push(lang);
        } else {
            answer.push(answer.length - lang);
        }
    }
    return answer
}



// function solution(s) {
//     var answer = [];
//     for(let i  = 0; i < s.length; i++) {
//         const element = s[i];
//
//     }
//     return answer;
// }
//

console.log(solution("banana"));