const arr = [1,2,3,4,2];

console.log(arr.indexOf(2)); // > 1
console.log(arr.indexOf(2,2)); // > 4
console.log(arr.indexOf(4)); // 3

const brr = ["a", "b", "c"];

console.log(brr.includes('c')); // t
console.log(brr.includes('d')); // f

// if(brr.indexOf('e') === -1){
//     brr.push('e');
// } -> 가독성 떨어짐
if(!brr.includes('d')){
    brr.push('d');
}

console.log(brr);