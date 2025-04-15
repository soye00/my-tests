const map = new Map();
const key = {key:10};

// map 에 {key:10} => 20 추가
map.set(key,20);
console.log(map);

// has map 에 {key:10} 가지고 있는지 확인
console.log(map.has(key));

// delete : 삭제
map.delete(key);
console.log(map);

// map 에 NaN=>100 추가
map.set(NaN,100);
console.log(map);

// clear : map 모든 내용 삭제
map.clear();
console.log(map);