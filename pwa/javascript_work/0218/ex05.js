
//익명함수 즉시호출
(function (){
    var a = 10;
    return function(x,y){
        return a + x+ y;
    };
}());

const test = function (x,y){
    return x + y +10;
};
console.log(test(1,2));

//클로저
var add1 = (function (){
    var a = 10;
    return function(x,y){
        return a + x + y;
    };
}());
console.log(add1(1,2));