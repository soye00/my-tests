// 순수 함수
function doA(n){
    return ++n;
}
const count = doA(3);
console.log(count);

// 비순수 함수
var n= 0;
function doB(n){
    n++;
}
doB();
console.log(n);