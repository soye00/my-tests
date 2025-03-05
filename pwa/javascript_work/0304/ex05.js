if (true) {
    let blockVar = "블록 스코프 변수";
    const blockConst = "블록 스코프 상수";
    console.log(blockVar);   // "블록 스코프 변수" 출력
    console.log(blockConst); // "블록 스코프 상수" 출력
}

// console.log(blockVar);   // 오류: blockVar is not defined
// console.log(blockConst); // 오류: blockConst is not defined

// const outerVar = '전역공간';
// function outer() {
//     let outerVar = "외부 변수";
//     function inner() {
//         // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
//         console.log(outerVar); // "외부 변수" 출력
//     }
//
//     inner();
// }
// outer();


const outerVar = '전역공간';

function outer() {
    let outerVar = "외부 변수";
    return function inner() {
        // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
        outerVar = outerVar + '!';
        console.log(outerVar); // "외부 변수" 출력
    }
}
const out = outer();
out();
out();
out();

