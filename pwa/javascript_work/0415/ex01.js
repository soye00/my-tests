// map 아주 조금 더 빠름
const obj  ={
    aa:10,
};

const map = new Map();
map.set('aa',1);

console.log(obj);
console.log(map);

obj.bb = 20;
map.set({aa:10},20);

console.log(obj);
console.log(map);


console.log(Object.keys(obj).length);
console.log(map.size);

console.log(Object.keys(obj));
console.log(['aa','bb','cc'].length);
console.log(map.size);

console.log(...map);
console.log({...obj});