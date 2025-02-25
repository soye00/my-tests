//함수 호이스팅
doA();

function doA() {
    console.log("test");
}

//함수 표현식 & 익명함수
const square = function(n) {
    return n*n;
};
console.log(square(5));

//즉시 호출 함수 표현식
(function (){
    console.log("test");
})(); // ()
(function (aa){
    console.log("test"+aa);
})(10);
