function  aa (){
    this.name = '홍길동';
    this.age = 20;
    console.log('호출');
}

aa();
new aa();
// 반환되는 값이 다르다
