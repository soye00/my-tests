/*
머쓱이 보다 키 큰 사람의 수 리턴!
머쓱이 키 = height
반 친구들의 키가 담긴 배열 array
array[i] 번째랑 머쓱이 키 height 비교
작으면 그대로 크면 +1

*/


function solution(array, height) {
    var answer = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > height) {
            answer++
        }
    }
    return answer;
}
console.log(solution([149,180,192,170],167));
console.log(solution([180,120,140],190));


// // 🧡🧡filter !!
// function solution(array, height) {
//     var answer = array.filter(item => item > height);
//     return answer.length;
// }
//
//
// solution([1,2,3,4],2)



// // 💛💛map
// function solution(array, height) {
//     let result = 0;
//     array.map((arr) => height < arr && result++);
//
//     return result;
// }