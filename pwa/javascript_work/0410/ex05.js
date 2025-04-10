const arr = [1,4];
arr.splice(1,0,...[2,3]);
console.log(arr); // [1,2,3,4];