class Stack {
    arr;
    constructor(arr = []){
        this.arr = arr;
    }

    push(item){
        this.arr.push(item);
    }
    pop(item){
        this.arr.pop(item);
    }
    entries(){
        return [...this.arr];
    }
}

const m = new Stack([1,2,3,4]);
console.log(m);

m.push(5);
console.log(m);

m.pop();
console.log(m);