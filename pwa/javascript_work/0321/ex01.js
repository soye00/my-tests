/*



 */


const foo = function (){
    return 1;
}

console.log(foo()); // 1
console.log(new foo()); // foo {}


const obj = {
    foo: function (){
        return 2;
    }
};

// ✨메서드 축약
const obj1 = {
    foo(){return 3}
};
// 화살표 함수
const obj2 = {foo: () => {
    return 4
    }};

console.log(obj.foo()); // 2
console.log(obj1.foo()); // 3
console.log(obj2.foo()); // 4
