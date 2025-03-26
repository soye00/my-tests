/*
배열 요소 추가 삭제

마지막 요소 추가 삭제 : push pop
첫번째 요소 추가 삭제 : unshift shift

중간요소 추가 : splice (<-> slice 랑 구분하기)

 */

const arr = [10,20,30,40];

arr.unshift(5);
console.log(arr); //5 추가 [ 5, 10, 20, 30, 40 ]

arr.shift();
console.log(arr); //5 제거[ 10, 20, 30, 40 ]

const retvalue = arr.shift();
console.log(`retvalue=${retvalue}`);
console.log(arr);
