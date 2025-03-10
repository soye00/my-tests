/*
왼쪽 오른쪽
문자열 리스트에 "u""d""l""r" 저장되어 있음
l r 중에 먼저 나오는 문자열이
l -> 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트 리턴
r -> 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트 리턴
l,r 이 없다면 빈 리스트 리턴 .

["u","u","l","r"] -> l을 기준으로 왼쪽에 있는 문자열 리턴 = ["u","u"]

indexOF 해당 없으면 -1 출력


 */

function solution(str_list) {
    let lindex = str_list.indexOf('l')
    let rindex = str_list.indexOf('r')

    if(lindex === -1) lindex = 21;
    if(rindex === -1) rindex = 21;

    if(lindex < rindex) {
        return str_list.slice(0, lindex)
    }else if(lindex > rindex) {
        return str_list.slice(rindex+1)
    }else return [];
}

console.log(solution(["u","u","l","r"]));
console.log(solution(["u","u","d","r","d"]));
console.log(solution(["u","r","d"]));
console.log(solution(["l"]));



// function solution(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'l') return arr.slice(0, i);
//         if (arr[i] === 'r') return arr.slice(i + 1);
//     }
//     return [];
// }