class Queue{

    constructor(arr = []) {
        this.arr = arr;
    }

    //넣는 거
    enque(item){
        this.arr.push(item)
    }

    //빼는 거
    deque(){
        return this.arr.shift();
    }

    //복사하는 거
    entries(){
        return[...this.arr];
    }
}

const que = new Queue([10,20,30]);
console.log(que);
que.enque(40);

console.log(que);