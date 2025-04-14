const obj = {
    value: 1,
    [Symbol.toPrimitive](hint){
        if(hint ==='number')return this.value;
        if(hint ==='string')return this.value;
    },
    [Symbol.iterator](){
        return {
            next(){
                return {value:1, done:false};
            }
        }
    }
}

console.log(obj) //{ value: 1 }

console.log(+obj) //NaN     +: 타입변환 -> 숫자로  [] > 1

console.log(`${obj}`) //[object Object]     타입변환 문자열로  [] > 1


console.log(obj[Symbol.iterator]().next());  //{ value: 1, done: false }
