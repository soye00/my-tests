//
// var a = 4.14;
// console.log(parseInt(a));
// console.log(Math.ceil(a)); // 올림처리


function solution(slice, n) {

    var res = n/slice;
    res = Math.ceil(res);
    return res;
}

const result = solution(7,10);
console.log(result);

console.log("실행");




