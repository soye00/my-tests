/*
배열 만들기 6
0과 1로만 이루어진 정수 arr 배열 arr을 이용해 새로운 배열 stk 만들기
i의 초기값을 0으로 설정.
i가 arr의 길이보다 작으면 다음을 반복

만약
stk 가 빈 배열 = arr[i]를 stk에 추가하고 i에 1더하기
stk 원소가 있고 stk 의 마지막 원소가 arr[i]오 ㅏ 같으면

 */

// function solution(arr) {
//     const stk = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(stk.length === 0) {stk.push(arr[i]);}
//         else if(stk[stk.length-1] === arr[i]) {stk.pop();}
//         else if(stk[stk.length-1] !== arr[i]) {stk.push(arr[i]);}
//     }
//     if(stk.length === 0) return [-1];
//     return stk;
// }


function solution(arr) {
    const stk = [];
    for (let i = 0; i < arr.length; i++) {
        if(stk.length === 0 || stk[stk.length-1] !== arr[i] ) {stk.push(arr[i]);}
        else if(stk[stk.length-1] === arr[i]) {stk.pop();}
    }
    if(stk.length === 0) return [-1];
    return stk;
}



console.log(solution([0,1,0]));
console.log(solution([0,1,0,1,0]));
console.log(solution([0,1,1,0]));