//함수 호이스팅
//변수 호이스팅 (but 값은 x)   

console.log(add);
console.log(sub);

function add() {
    console.log("add 함수입니다.");
}

var sub = function (){
    console.log("sub 함수입니다.");
}