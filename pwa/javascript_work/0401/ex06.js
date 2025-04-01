const Mydate = new Date('2025/04/01');

console.log(Mydate);
console.log(Mydate.toLocaleString('ko-kr'));
console.log(Mydate.toLocaleDateString('ko-kr'));

console.log(Mydate.toLocaleTimeString('ko-kr'));


setInterval(() => {
    console.log(Date.UTC(Date.now()));
},1000);