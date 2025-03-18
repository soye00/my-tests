// 클래스 특징 : 일반함수 호출 X

function A1(){
    this.a = 10;
    this.b = 20;
}
class A2 {
    doA(){
        console.log(this);
    }
}
A1(); // 일반함수 호출 가능
const a1 = new A1(); // 생성자 함수 호출 가능
for(const element of a1){
    console.log(element);
}

// A2(); // 일반함수 호출 불가능
new A2(); // 생성자 함수 호출 가능
a2.doA();