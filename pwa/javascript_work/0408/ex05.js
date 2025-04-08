Array.prototype.sum1 = function () {
    console.log(this);
    return this.reduce((a,b) => {
        return a + b;
    },0);
};

const arr = [10,20,30,40,50];
console.log(arr.sum1());

arr.shift();
console.log(arr);