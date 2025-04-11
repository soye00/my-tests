const [value,func,obj] = [10,()=>{console.log('test')},{a:10,b:20}];

// 배열 디스트럭처링 할당 const [a,b,c] = [=a,=b,=c]
// = const value = 10;
// = const func = () =>{console.log('test');};
// = const obj = {a:10,b:20};

console.log(value);
console.log(func);
console.log(obj);

func();