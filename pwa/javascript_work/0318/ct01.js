/*
두 개 뽑아서 더하기

정수 배열 numbers
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
더해서 만들 수 있는 모든 수의 배열에
오름차순으로 담아 리턴
[2,1,3,4,1]
->

set 중복 제거해서 넣기




 */


function solution(numbers) {
    var answer = [];
    const myset = new Set();
    for(let i=0; i<numbers.length; i++){
        const a = numbers[i];
        for(let j = 0; j < numbers.length; j++){
            const b = numbers[j];
            if(i !== j) myset.add(a+b);
        }
    }
    answer = [...myset];
    return answer.sort((a,b) => a-b);
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));