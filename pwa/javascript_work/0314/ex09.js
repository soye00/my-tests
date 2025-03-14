const counter = function (callback){
    let coun = 0;
    return function (callback){
        coun = callback(coun);
        return coun;
    }
}();

const increase = function (num){
    return ++num;
}

const decrease = function (num){
    return --num;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));

console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(decrease));