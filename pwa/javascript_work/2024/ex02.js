//클로저

function doA(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}
const counter = doA();
console.log(counter);
const value = counter();
console.log(value);