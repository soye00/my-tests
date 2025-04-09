//피보나치 수열

const fibo =  function (max){
    let [pre,cur] = [0,1];
    return {
    [Symbol.iterator](){

        return{
            next(){
                [pre,cur] = [cur, pre + cur];
                return {value:cur, done:cur>max};
            },
        };
    },
  }
};

for(const element of fibo(40)) {
    console.log(element);
}



// const iter = fibo[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
