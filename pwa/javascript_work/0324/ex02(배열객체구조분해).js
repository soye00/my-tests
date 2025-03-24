// function doA(dd){
//     console.log(dd.a);
//     console.log(dd.b);
// }

// 🧡 객체구조분해
function doA({a,b}){
    console.log(a);
    console.log(b);
}

doA({a: 10, b: 20});


// function doB(brr){
//     console.log(brr[0]);
//     console.log(brr[1]);
//     console.log(brr[2]);
// }

// 🐠 배열구조분해
function doB([num1, num2, num3], callback) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
    callback();
}
doB([10,20,30],function (){
    console.log('함수로 콜백함수 보내기')
});

