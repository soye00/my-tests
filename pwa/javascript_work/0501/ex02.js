function * genFunc(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = genFunc();
console.log('Symbol.iterator' in gen);
console.log('next' in gen);

console.log(Object.getOwnPropertyDescriptors('gen'));
console.log(Object.getOwnPropertySymbols('gen'));