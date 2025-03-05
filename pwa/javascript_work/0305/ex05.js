function arg(){
    const test = Array.prototype.slice.call(arguments);
    console.log(test);
}
arg(10,20,30);