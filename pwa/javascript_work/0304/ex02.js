// 즉시 함수 호출

// function (){
//     console.log('즉시함수');
// }(); // // > 에러 ! () 괄호 넣주기

(function (){
    console.log('즉시함수');
})();

function aa(){
    return (function (){
        console.log('즉시함수2');
    });
}
aa()();