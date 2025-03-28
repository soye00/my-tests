const numbers = [1,2,3,4,5,6];
const pows = [];

for(let i = 0; i<numbers.length; i++) {
    // console.log(i);
    // console.log(numbers[i]);

    pows.push(numbers[i] ** 2);
}

console.log(pows);


const result = numbers.forEach(number => {
    pows.push(number ** 2);
})
console.log(result);

const pows1 = numbers.map(item => {
    return item ** 2;
})
console.log(pows1);