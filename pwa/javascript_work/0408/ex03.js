const s1 = Symbol.for('aa');
console.log(Symbol.keyFor(s1)); // aa

const s2 = Symbol('bb');
console.log(Symbol.keyFor(s2)); //undefined

