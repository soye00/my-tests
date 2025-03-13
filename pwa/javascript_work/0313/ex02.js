
const arr = [1,2,3,4,5];
console.log(arr.slice(1,4));

function aa(a,b,c){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    const arr = Array.prototype.slice.call(arguments);
    arr.forEach(item => {
        console.log(item);
    });
    console.log(this);
}

// // 일반함수로서의 호출 전역객체 this
// aa();

const obj = {aa:10, bb:20}
// aa.apply(obj,[10,20,30]);
// aa.call(obj,10,20,30);

aa.bind(obj)();

