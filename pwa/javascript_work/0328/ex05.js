//filter

const arr = [1,2,3,4,5];

// -> 1,3,5 만 나오도록

// return true -> 반환 false -> 반환 X


const brr = arr.filter((item)=>{
    return item % 2 === 1;
    // ✨Boolean =>    1 -> true          0 -> false
    // return item % 2
    // return !(item % 2); -> 짝수만
})

const crr = arr.filter((item)=>item%2);

console.log(brr);
console.log(crr);