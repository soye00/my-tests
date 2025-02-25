/*
reduce 한개로 줄여서 반환
 */

const result = [1,2,3,4,5].reduce((acc,num) => {
    console.log(acc);
    console.log(num);
    return acc+num; // 반환값 => acc
});
console.log(result);