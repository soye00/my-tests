class A{
    constructor(aa, bb) {
        this.aa = aa;
        this.bb = bb;
    }
    doA(){
        console.log('A 클래스 안에 있는 doA 메서드')
    }
}

class B extends A {
    constructor(aa,bb,cc) {
        super(aa, bb);
        // super : 상위객체 의 constructor(생성자) 호출 > class 에서만 메서드 축약표현(화살표 함수 X) 에서만 사용 가능!
        this.cc = cc;
    }
    doA(){
        console.log('B클래서 안에 있는 doA 메서드');
    }
}

const me = new B(10,20,30);
console.log(me);
me.doA();

