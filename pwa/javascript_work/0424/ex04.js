const person = {
    name: 'John',
    age: 25,
}

const filter = function (key,value){
    return typeof value === "number" ? undefined : value;
};

console.log(person); // -> object { name: 'John', age: 25 }

//JSON.stringify -> 문자열로 변경
console.log(JSON.stringify(person)); // {"name":"John","age":25}

console.log(JSON.stringify(person,null,2));

console.log(JSON.stringify(person,filter,2));

