// concat

// push 원본배열이 변경, concat 원본배열 변경 X

const arr = [1,2,3,4,5,6];
arr.push(4);
console.log(arr);

const result = arr.concat(5);
console.log(arr); // result 는 변경되지만 arr은 변경 X 

console.log(`result =${result}`);
