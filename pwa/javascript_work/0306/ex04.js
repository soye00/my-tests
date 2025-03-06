// const obj = {
//     foo(){},
//     arrow :  () => {},
//     bar : function (){}
// }
//
// console.log(obj.foo.hasOwnProperty('prototype')); // > f
// console.log(obj.arrow .hasOwnProperty('prototype')); // > f
// console.log(obj.bar .hasOwnProperty('prototype')); // > t


/*
constructor 생성자 호출시 prototype(개발자 수정가능) 가지고 생성
생성자 함수 사용 가능 [[construct]](-> new 생성 가능), [[call]](-> 호출가능) 있음.
 */

const obj = {
    bar : function (){}, //> 일반함수 : call,construct 있음
    foo(){}, // > 메서드 축약 : call 있음 construct 없음
    arrow :  () => {}, // > 화살표함수 : call, construct 없음
    test: {},   // 일반객체 
}
