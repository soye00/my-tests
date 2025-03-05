// const numbers = [1,2,3,4,5];

function doA(...numbers) {
    const ret = numbers?.reduce((a,b) => {
        console.log(a);
        console.log(b);
        // return 10; // -> 리턴값이 a로 들어감 리턴 없으면 a = undefined
        return a + b;
    }, 0)
    return ret;
}

console.log(`doA() ${doA(1,2,3,4,5)}`);


