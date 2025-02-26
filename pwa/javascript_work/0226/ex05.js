function foo(){

}
// 함수는 객체이다. 객체와 동일하게 동작. -> callable, constructor
// 함수객체는 일반객체가 가지고있는 모든것을 가지고있다.

// const foo = {}; -> 내부메서드 x : call, construct 없음 -> 호출, new 연산자 생성 X
// -> non-callable, non-constructor

// 화살표함수, 메서드 축약으로 메서드 선언 -> non-constructor : new 연산자 생성 X
foo.aa = 10;
foo.doA = function (){
    console.log(this.aa);
}

foo.doA();

