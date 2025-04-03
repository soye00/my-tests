function snakeToCamel(str){
    console.log(str);
    console.log(str.match(/_[a-z]/g));
    str = str.replace(/_[a-z]/g, ele =>
    ele[1].toUpperCase());
    return str;
}

console.log(snakeToCamel('hello_world'));
console.log(snakeToCamel('hello_world_world'));