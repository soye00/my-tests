const arr = [1,2,3,4,5];

const res = arr.splice(2, 0, 100,200);
console.log(res); // > 제거 없어서 빈 배열 []
console.log(arr); // > [1,2,100,200,3,4,5]

const result = arr.splice(0,2);
console.log(result); // [1,2] 제거된 항목이 배열로 반환

const result2 = arr.splice(1); // 1 부터 모두 삭제
