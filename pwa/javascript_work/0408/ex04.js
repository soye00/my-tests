const obj = {
    aa: 10,
    bb: 20,
    [Symbol.for('aaa')]:1,
};

console.log(obj[Symbol.for('aaa')]);

console.log(Object.getOwnPropertyDescriptors(obj, 'aa'));

for (const key in obj) {
    console.log(`key=${key}`);
}

console.log(Object.getOwnPropertySymbols(obj));

