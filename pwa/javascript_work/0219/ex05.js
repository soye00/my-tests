
//재귀 함수
function fact(n){
    if(n <= 1) return 1; // 탈출 조건 없으면 무한 호출 (스택 오버플로)
    else
        return n * fact(n - 1);
}
console.log(fact(5));

//중첩 함수 함수안 함수
function outer(){
    var x = 1;
    function inner(){
        var y = 2;
        console.log(x+y);
    }
    inner();
}

outer();