function test(){
    setTimeout(function (){
        console.log("test");
    },1000);
    return "aa";
}

test();
console.log('종료되었습니다');