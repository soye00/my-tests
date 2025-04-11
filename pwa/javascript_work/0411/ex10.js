const {x,y,...rest} = {x:1,y:2,z:4,k:5};

console.log(x); //1
console.log(y);
console.log(rest); //{ z: 4, k: 5 } 나머지는 객체로
