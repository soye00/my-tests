function solution(myString) {
    let answer = myString.toUpperCase();
    return answer;
}

console.log(solution("aBcDeFg"));
console.log(solution("adddeDDgg"));
console.log(solution("AAA"));



//
// function solution(myString) {
//     return myString.replace(/[a-z]/g, (match) => match.toUpperCase())
// }