//node 환경에서는 window 출력되지 않음..
// function countDown(n){
//     for(var i = n; i > -1; i--){
//         console.log(i);
//     }
// }

//재귀함수
function countDown(n){
    console.log('호출됨');
    if(n < 0) return;
    console.log(n);
    countDown(n-1);
}

countDown(10);
