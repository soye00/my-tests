function sum (){
    console.log(arguments);
    for(let i=0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));
