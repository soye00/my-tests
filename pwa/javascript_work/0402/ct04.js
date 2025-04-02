function solution(arr)
{
    let answer = new Set();
    answer.add(arr);

    return [...answer];
}

console.log(solution([1,1,3,3,0,1,1]));