function camelToSnake(str){
    console.log(str);
    console.log(str.match(/.[A-Z]/));
    str = str.replace(/.[A-Z]/, ele =>
        ele[0]+'_'+ele[1].toLowerCase());
    return str;
}
console.log(camelToSnake('helloWorld'));

