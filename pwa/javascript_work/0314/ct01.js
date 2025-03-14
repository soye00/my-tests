/*

크기가 작은 부분문자열

숫자로 이루어진 문자열 t p 주어질 때
t 에서 p 와 길이가 같은 부분문자열 중에서,
부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 리턴
ex ) t= "3141592" p ="271" -> p 길이 =3
3자리 부분 문자열 [ 314, 141, 415, 159, 592 ] 중에서
p 271 보다 작거나 같은 수 는 141, 159 2개
리턴 2 !
p와 길이가 같은 t의 부분 문자열을 만들고
p 보다 작거나 같은 수의 개수를


 */


// function solution(t, p) {
//     var answer = 0;
//
//     for(let i = 0; i < t.length; i++) {
//         const str = t.slice(i, i + p.length);
//         if(str.length === p.length) {
//             if((Number(str) <= Number(p)){
//                 answer++;
//             }
//         }
//     }
//     return answer;
// }





function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++){
        let str = t.slice(i, i + p.length);
        if(str.length === p.length && Number(str) <= Number(p)){
            answer++;  }
        }
    return answer;

}



//
// console.log(solution("3141592", "271"));
// console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));


/*
function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}


숫자로만 이루어진 문자열 앞에 +를 붙이면 숫자로 변환이 됩니다. const a = "123"; console.log(+a) // "123"이 아닌 123



 */