const incre = (function (){
    let num = 1;

    return function(){
    num++;
    console.log(num);
    }
})();

incre();
incre();
incre();