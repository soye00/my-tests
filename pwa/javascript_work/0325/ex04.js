// 희소 배열
const arr = [,2, , 4];
console.log(arr.length);
console.log(arr);

console.log(Object.getOwnPropertyDescriptors(arr));

const brr = Array.from(
    {
        length: 3, 0:'a', 1:'b'
    }
)

console.log(brr);

const crr = Array.from('hello'); // 문자열을 배열로 바꾸기
// 배열 -> 문자열은 join("")
console.log(crr);


const drr = Array.from({length: 4},(a,b)=> {
    console.log(`a=${a} b=${b}`);
    return b;
})

console.log(drr);