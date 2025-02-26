//this는 3가지 상황에 따라 다르다
// 1️⃣ 일반 함수로서 호출 -> 전역객체(node global, 브라우저 window)
// 2️⃣ 메서드로서 호출 -> 부모객체
// 3️⃣ 생성자 함수(new)로서 호출 -> {}

function foo (){
    console.log(this);
}

//1️⃣
// foo(); // > Object [global] -> globalThis(전역객체)
// 브라우저 전역객체 window
// node 백엔드 전역객체 global : 생략 가능한 전역객체

//2️⃣
// const name = "홍길동";
// const obj = {
//     name,
//     foo //=메서드
// };
//
// console.log(obj); // > { name: '홍길동', func: [Function: foo] }
// obj.foo(); // > { name: '홍길동', foo: [Function: foo] } -> 부모객체인 obj 가리킴

//3️⃣
// new foo(); // > foo {}

