const fn1 = function doA(){
    console.log('doA');
}


const obj = {
    fn1,
}

obj.fn1();

function makeFn1(fff){
    return function () {
        fff();
    };
}
makeFn1(obj.fn1);