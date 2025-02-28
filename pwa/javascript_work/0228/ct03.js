

function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length ; i++){
        answer.push(numbers[i]*2);
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,2,100,-99,5,1,2,3]));

//map
// const solution = (numbers) => numbers.map( number => number * 2)