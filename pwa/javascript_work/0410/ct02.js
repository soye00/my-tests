function solution(n){
    let answer = [...String(n)].map(Number).reduce((a, b) => a + b);
    return answer;
}


console.log(solution(123)); //6
console.log(solution(987)); //24




// let a = 123;
// console.log(a.toString().split('')); //[ '1', '2', '3' ]

// let a = 123;
// let result = [...String(a)].map(Number);
// console.log(result); // [1, 2, 3]
//
