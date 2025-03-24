// 나머지 Rest 파라미터
function doA(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
// Rest 파라미터는 마지막에 단 하나만 가능
doA(1,2,3,4,5);