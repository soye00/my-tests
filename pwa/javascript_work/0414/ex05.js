const set = new Set([1,2,3]);

console.log(set);
set.add(4).add(5);

console.log(set);

/*
✨✨✨
set.add().delete() 연결 X
add - 반환값이 set -> set(){}
delete - 반환값이 set X -> 삭제가 되면 true , 안되면 false
 */


set.add(NaN);
set.add(NaN);

console.log(set);

set.delete(NaN);
console.log(set);

set.clear();
console.log(set);
