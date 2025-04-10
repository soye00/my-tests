const arr = [1, 2, 3, 4, 5];

console.log(Math.max(arr));
console.log(Math.max(...arr));
console.log(Math.max(10,20,30,40));

// apply (this,파라메타배열) => 배열 보냄
// call (this, 스프레드 배열) => 배열을 스프레드로 보냄

const apMax = Math.max.apply(Math, arr);
console.log(apMax);

const caMax = Math.max.call(Math, arr);
console.log(caMax);

const caMax2 = Math.max.call(null, 1,2,3,4,5);
console.log(caMax2);