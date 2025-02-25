//고차함수 4가지
/*
forEach - 반환값이 없는
map - 반환값이 있는
filter
reduce
 */

// item = 1-> 2 -> 3 , i = index = 0 ->1 ->2 , arr = 전체 1,2,3 -> 1,2,3 -> 1,2,3
// const result1 = [1,2,3].💛forEach((item, i, arr)=> {
//     console.log('화살표 forEach' + item);
//     console.log(`index: ${i}`);
//     console.log(`arr: ${arr}`);
// });
//
// console.log(result1); -> undefined ( 💛반환값 X )

// const result2 = [1,2,3].💚map((item, i, arr)=> {
//      console.log('화살표 forEach' + item);
//      console.log(`index: ${i}`);
//      console.log(`arr: ${arr}`);
//      return item*2; //( 💚반환값 O)
//  });

const result2 = [1,2,3].map(test => test*2);
console.log(result2);

