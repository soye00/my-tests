/*
문자 개수 세기
알파벳 대소문자로만 이루어진 문자열 my_string
my_string에서 a의 개수 b의 개수 ... z 의 개수 를 순서대로 담은
길이 52 의 정수 배열을 리턴



 */

function solution(my_string) {
    var str = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
        ,'s', 't','u','v','w','x','y','z'];
    const answer = new Array(str.length).fill(0);
        for (let i = 0; i < str.length; i++) {
            for(let j = 0; j < my_string.length; j++) {
                if(str[i] === my_string[j]) answer[i]++;
            }
        }
    return answer;
}

console.log(solution('Programmers'));

//  .fill(0) str의 길이만큼 0을 채운 배열을 만들어라

//function solution(my_string) {
//     let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     var answer = new Array(52).fill(0);
//     for (let i = 0; i < my_string.length; i++) {
//         answer[alp.indexOf(my_string[i])]++;
//     }
//     return answer;
// }