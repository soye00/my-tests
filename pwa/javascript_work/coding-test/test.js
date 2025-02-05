function solution(n,k) {
    var total = 0;

    var 양꼬치값 = n * 12000;
    var 음료수값 = k * 2000;
    total = 양꼬치값 + 음료수값;
    total = total - parseInt(n/10)*2000;

    return total.toLocaleString();
}
const value1 = solution(10,3);
console.log(value1); 

const value2 = solution(64, 6);
console.log(value2);