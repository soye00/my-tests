function foo(){} // 💚함수 객체
foo(); // -> 호출 가능
new foo(); // -> new 연산자 생성 가능
// 💚 = callable


const arrow = () => {} // 💜화살표 함수
arrow(); // 호출은 가능
new arrow(); // > arrow is not a constructor : new 연산자 생성 X
// 💜 = callable, non-constructor


const obj = {
    x(){
        console.log('obj x');
    }
} // 💛메서드 축약 표현으로 정의된 함수
obj.x(); // 호출은 가능
new obj.x(); // > obj.x is not a constructor : new 연산자 생성 X
//  💛 = callable, non-constructor

// 👉 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor : new 연산자 생성 가능
