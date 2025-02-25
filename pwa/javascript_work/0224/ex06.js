// if(true){
//
//     let msg = 'message';
//     console.log(msg);
// }
// console.log(msg); //msg 변수는 유효 범위가 if 구문 안이기 때문에 에러
//
// //var -> 전역:가능
// //let -> 불가능

for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log(`외부에서 ${i}`);

for(let j = 0; j < 5; j++){
    console.log(j);
}
console.log(`외부 ${j}`); // j is not defined