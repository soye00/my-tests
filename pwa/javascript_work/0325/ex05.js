const arr = [0];

arr[100] = 100;

console.log(arr);

console.log(Object.getOwnPropertyDescriptors(arr));


const brr = [1,2,3,4,5];

delete brr[1];


// splice(삭제 시작 인덱스, 삭제개수 )
// console.log(brr); // > [ 1, <1 empty item>, 3, 4, 5 ]
// console.log(brr.length); // > 5

brr.splice(1, 1); // 인덱스 1번 요소부터 1개 삭제
console.log(brr); // >[ 1, 3, 4, 5 ]
console.log(brr.length); // 4

brr.splice(1,3);
console.log(brr); // [1]

brr.splice(0, 1, 10,20,30); // 0부터 1개 자르고 10,20,30 요소 추가
console.log(brr); //[ 10, 20, 30 ]

// 💁‍♀️ splice vs slice 구분하기 !
