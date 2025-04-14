Set.prototype.aa = function (){
    console.log('test');
}
// 원래 있는 메서드를 덮어 씌워 바꾸기
// 재정의 override

// Set.prototype.intersection = function (set){
//     const res = new Set();
//     console.log('this =', this)
//     console.log('set =', set);
//     for(const setElement of set){
//         if(this.has(setElement))res.add(setElement);
//     }
//
//     return res;
// }

Set.prototype.intersection = function (set){
    return [...this].filter((i)=> set.has(i))
};
Set.prototype.union = function (set){
    return new Set([...this, ...set]);
};


const setA = new Set([1,2,3,4,5,6,7,8,9]);
const setB = new Set([1,2,3,4,8,9]);

console.log("aa" in setA);
console.log("intersection" in setA);

console.log("res = "+[...setA.intersection(setB)]);
console.log("res = "+[...setA.union(setB)]);