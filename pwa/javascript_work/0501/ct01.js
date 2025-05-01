// 없는 숫자 더하기
/*
0-9까지 숫자 중 배열에서 없는 숫자 찾아서
없는 숫자 모두 더한 수를 리턴

 */
// 0-9 까지 숫자중에서 numbers 에 있는 숫자를 빼고 더하기

function solution(numbers) {
    let a = [0,1,2,3,4,5,6,7,8,9];
    let diff = a.filter(item => !numbers.includes(item));

    return diff.reduce((a, b) => a + b,0);
}


const a = [1,2,3,4,5];
const b = [4,5,6,7];

const setB = new Set(b);

const diff = a.filter(item => !setB.has(item));
console.log(diff);




// function solution(numbers) {
//     let answer = [0,1,2,3,4,5,6,7,8,9];
//
//
//
//
//     return answer;
// }

console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));




// // if(regex.test(num[0])){
// //     console.log(1)
// // }else{
// //     console.log(2)
// // }

// let num = ['j',10,2,3,4,5];
// const regex = /^[0-9]$/;
// //
// num.forEach((item) => {
//     if(!regex.test(item)){
//         console.log(item);
//     }
// })
