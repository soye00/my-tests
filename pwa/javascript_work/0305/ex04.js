// arguments.slice is not a function
// -
// arguments -> 👉유사 배열 ! -> 배열 메서드 사용 X
// -> 배열 메서드 사용하려면 Function.prototype,apply/call/bind 간접 호출 해야함

function test (){
    console.log('test함수 호출');
    // const value = arguments.slice(0,2);
    // console.log(value);
}
test(10,20,30);

test.call();
test.apply();


/* 🔑
1️⃣ [] 배열 -> array.prototype 자동으로 가짐
=> map, reduce  .. 배열 메서드 사용 가능
2️⃣ {} 객체 -> Object.prototype => hasOwnProperty ... 객체 메서드 사용 가능
3️⃣ function(){} 함수 -> Function.prototype  => 함수 메서드 사용 가능

 */

function arg(){

}


