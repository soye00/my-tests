Set.prototype.isSuperSet = function(set) {
    return [...set].every((i)=> this.has(i));
};
const setA = new Set([1,2,3,4,5]);
const setB = new Set([6,7,8,9]);

console.log(setA.intersection(setB));
console.log(setB.intersection(setB));