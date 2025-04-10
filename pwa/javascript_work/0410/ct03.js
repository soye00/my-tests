function solution(n) {
    let answer = [...String(n)].map(Number).reverse();
    return answer;
}

// function solution(n){
//     let
// }


console.log(solution(12345));
console.log(solution(987));
console.log(solution(45651453));