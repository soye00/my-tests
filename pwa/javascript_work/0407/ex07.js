const arr = [10,5,3,2,6,1];

console.log(arr.sort((a, b) => a - b)); // 오름
console.log(arr.sort((a, b) => b - a)); // 내림

const brr = ["orange", "apple", "banana", "pineapple"];
console.log(brr.sort((a,b)=> b.localeCompare(a)));
console.log(brr.sort((a,b)=> a.localeCompare(b)));
// console.log(brr.sort());



const crr = ["한글", "테스트", "가나다"];
console.log(crr.sort());
console.log(crr.sort((a, b) => b-a));