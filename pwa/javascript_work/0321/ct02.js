/*
핸드폰 번호 가리기

개인정보 보호를 위해 전화번호 뒷 4자리를 제외한 나머지 숫자들을 리턴
전화번호 4이상 20이하인 문자열
01012345678 -> *******5678
027778888 -> *****8888

뒤 자리를 가져오고
앞을 *로 바꿔
아니면 앞을 *로 채워


let str = "123456789";
let result = "*".repeat(str.length - 4) + str.slice(-4);
console.log(result); // "*****6789"

 */

//
// let a = "123456789";
// let res = "abc".repeat(2) + a.slice(-4);
// console.log(res);


const brr = new Array(5).fill("0");

console.log(brr); // [ '0', '0', '0', '0', '0' ]


const crr = [1,2,3,4,5,6,7,8,9];
const c = crr.slice(5); // 인덱스 5이상
console.log(c); // 6789
const d = crr.slice(1,3); // 인덱스 1 ~ 3미만까지
console.log(d); // 23
const e = crr.slice(-3); // -3이상 => 인덱스 -3,-2,-1
console.log(e); //789





function solution(phone_number) {
    let answer = "*".repeat(phone_number.length-4) + phone_number.slice(-4);
    return answer;
}


console.log(solution("01033334444"));
console.log(solution("1234567890"));
console.log(solution("027778888"));