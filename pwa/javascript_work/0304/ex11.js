// 1. 변수안에 함수를 넣을 수 있다.
const greet = function (name){
    console.log(name);
}
// greet('홍길동');

// 2. 함수의 인자(argument)로 함수를 넣을 수 있다.
function  processInput(callback){
    const name = '홍길동';
    callback(name);
}
processInput(greet);

// 3. 함수를 리턴할 수 있다.
function aa(num1){
    return function(num2){
        return num1 * num2;
    }
}
const f  = aa(3);
console.log(f(4));

// 4. 객체의 프로퍼티로 저장 가능
