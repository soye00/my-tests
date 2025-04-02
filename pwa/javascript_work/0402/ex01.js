
// math.random 으로 1 ~ 46 까지 중에서 중복되지 않는 숫자 6개 뽑기

// for(let i = 0; i<6; i++){
//     const lotto = (parseInt(Math.random()*46) + 1 );
//
// }

const lottoNum = new Set();
do{
    lottoNum.add(parseInt(Math.random()*46)+1);
}while (lottoNum.size !== 6);

console.log([...lottoNum]);


// set -> 중복제거

// const myset = new Set();
// myset.add(1);
// myset.add(2);
// myset.add(3);
// myset.add(3);
// myset.add(8);
//
// console.log(myset);
// console.log(myset.size); // > 4
// console.log([...myset]);