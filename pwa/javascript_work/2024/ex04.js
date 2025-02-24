function sum(...numbers) {
    numbers.reduce((a,b)=> {
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        return a+b; //return 없으면 undefined
    },0) //초기값)
}
sum(1,2,3,4,5);