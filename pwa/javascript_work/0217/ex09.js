const res1 = (a, b) => a + b;
const res2= (a, b) => {return a + b};

console.log(res1(10,20));
console.log(res2(10,20)); //-> 같은 결과

const res3 = (arr) => { // 매개변수 👉하나일 때 arr ()괄호 생략 가능
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        sum += arr[i];
    }
    return sum;
}
res3([10,20,30]); // 10 20 30

const result = res3([10,20,30]);
console.log(result);