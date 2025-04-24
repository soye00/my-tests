// 비동기화
function doA(){
    console.log('doA');
    for(let i = 0; i<10000000000000; i++){}
}
function doB(){
    console.log('doB');
}

console.log('start');

setTimeout(doA, 3000);
doA();

console.log('end');