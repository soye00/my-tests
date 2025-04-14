const setA = new Set([1,2,3,4,5,6,7]);
const setB = new Set([4,5,6,7]);

console.log('aa' in setA); //f
console.log('intersection' in setA); //t

console.log(setA.intersection(setB)); //Set(4) { 4, 5, 6, 7 }