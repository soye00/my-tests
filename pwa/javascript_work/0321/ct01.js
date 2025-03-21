/*

제일 작은 수 제거하기

정수를 저장한 배열 arr  ex)[4,3,2,1]

가장 작은 수를 제거한 배열을 리턴

리턴하려는 배열이 빈 배열일 경우 배열에 -1 채워 리턴
[4,3,2,1] -> [4,3,2]
[10] -> [-1]

제일 작은 수 제거
큰수대로 배열을 만들어서
마지막 지우고
글자수가 하나면 -1 리턴

 */

//
// let a = [1,2,3,4,5,6,7,8,9];
// console.log(a.length);
// console.log(a.sort((a,b)=>b-a));


// function solution(arr) {
//     var answer = [];
//
//     if(arr.length > 1 ){
//         answer = arr.sort((a, b) => a - b).pop();
//         console.log(answer);
//     }else{
//         answer = [-1];
//     }
//
//
//
//     return answer;
// }
//
// const result = [10,20,30,40].filter((item,index,arr)=> {
//     console.log(`item = ${item}`);
//     console.log(`index = ${index}`);
//     console.log(`arr = ${arr}`);
//
//     return item<30;
// }) // item 이 30 미만인  index == 3 인덱스가 3인
//

/*




function solution(arr) {
    answer = arr.sort((a, b) => b-a);
    answer.pop();
    if(answer.length < 1)return [-1];
    return answer;
}


function solution(arr) {
    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);
    arr.splice(minIndex, 1);
    const answer = arr;
    if(answer.length === 0) return [-1];
    return answer;
}


 */

function solution(arr) {
    const min = Math.min(...arr);
    const answer = arr.filter((item)=> {
        return item !== min;
    });
    if(answer.length === 0) return [-1];
    return answer;
}






console.log(solution([4,3,2,1]));
console.log(solution([1,2,3,4,5,6,7,8,9]));
console.log(solution([10]));



