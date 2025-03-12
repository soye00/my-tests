function aa(){
    console.log(this);

}
//생성자 함수로 호출시 this 는 빈객체 {} 가리킴
new aa(); // > aa{}

//일반 함수로 호출시 this 는 node 에서는 globalThis 를 가리킴 - 브라우저는 window
aa();