const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.reduce((a,b,index,values) => {
    console.log(`a = ${a} b = ${b} index=${index} values=${values}`);
    return a + b;
} )

console.log(`result = ${result}`);