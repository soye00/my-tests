//화살표 함수
const add = (x,y) => x + y;
const sub = (x, y) => x - y;

console.log(add(10,4));
console.log(sub(5,3));

// return 은 {}괄호 💛
const readd = (x,y) => {return x + y;};

// 🤍 객체 리턴 -> ()소괄호
const getUser = () => ({name: "길동", age:20});
// 🤍 리턴 + {}중괄호
const getUsers = () => {
    var name = "홍길동";
    var age = 50;
    return {name, age};
}
console.log(getUser());
console.log(getUsers());
