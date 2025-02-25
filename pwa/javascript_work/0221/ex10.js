function foo(){
    console.log('전역공간 foo함수');
}

function bar(){
    function foo(){
        console.log("bar 함수안 foo함수")
    }
    foo();
}

bar();