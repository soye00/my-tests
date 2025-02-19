
//익명 즉시 함수 호출 ()
(function (){
    var x = 5;
    var y = 7;
    return x+y;
})();

var res = (function (){
    var a = 1;
    var b = 2;
    return a + b;
}());
console.log(typeof res);

