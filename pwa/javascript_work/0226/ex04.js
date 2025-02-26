// function test(){
//     this.aa = 10;
// }
// test();
// console.log(aa);

function doA(){
this.aa = 10;
this.bb = 20;
return 100;
}

const aa = new doA();
console.log(aa); // > doA { aa: 10, bb: 20 }


const value = doA();
console.log(value); // > 100
