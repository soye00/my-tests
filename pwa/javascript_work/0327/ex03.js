//Array.from
/*
length:3 => 3번 돌린다 (map 과 비슷>?)

 */

// const arr = Array.from({length:3}, (item,index) => {
//     console.log(`item=${item}`);
//     console.log(`index=${index}`);
//     return 1;
// })

const arr = Array.from({length:6},(_,i) => i+1);


const arr2 = Array.from([1,2,3,4,5], (item,index) => {
    console.log(`item2=${item}`);
    console.log(`index2=${index}`);
    return item+1;
})

console.log(arr);
console.log(arr2);