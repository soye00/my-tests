const map = new Map();
map.set('key1','value1');
map.set('key1','value2');

// 키 값이 같으면 덮어씌우기
console.log(map);

// 속성값이 같으면 덮어씌우기
const obj = {aa:10};
obj.aa = 20;
console.log(obj);

for (const element of map){
    console.log(element);
}

map.forEach((value,key)=>{
    console.log(`key = ${key} value = ${value}`);
});