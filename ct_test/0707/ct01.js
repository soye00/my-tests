// 암호 해독

function solution(cipher, code) {
    const arr = [...cipher];
    const answer = arr.filter((c,i)=> (i+1)%code === 0).join('');


    return answer;
}


console.log(solution("dfjardstddetckdaccccdegk",4)) // attack
console.log(solution("pfqallllabwaoclk",2))