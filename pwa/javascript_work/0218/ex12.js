function test(b, obj){
    b = 20;
    obj.name = "김";
}
var a = 10;
var person = {name : "홍"};

console.log(a);
console.log(person);

test(a,person);
//깊은 복사
// test(a,{...person});

console.log(a);
console.log(person);