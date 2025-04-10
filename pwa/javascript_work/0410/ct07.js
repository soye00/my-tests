/*
서울에서 김서방 찾기


 */

function solution(seoul) {
    const reg = /Kim/;
    let index = seoul.findIndex(i => reg.test(i));
    return `김서방은 ${index}에 있다`;
}

console.log(solution(["Jane", "Kim"]));
console.log(solution(["Jane", "sdfsd","Kim"]));
console.log(solution(["Jane", "sdfsd","djdhfjkd", "Kim"]));



//
//
//
//
// const arr = ["Jane", "asdk", "Kim"];
// const reg = /Kim/;
//
//
// let a = arr.findIndex(item => reg.test(item));
// console.log(a);
//
//
//
//
// console.log(reg.test(arr));
//
// let match = reg.test(arr);
//
// const mi = arr.filter(item => reg.test(item));
// console.log(mi);
//
// const find = mi[0];
// const ind = arr.indexOf(find);
// console.log(ind);


// let a = arr.findIndex(arr.filter(item => reg.test(item)));
// console.log(a);


