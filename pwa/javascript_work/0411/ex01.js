const obj1= {aa:10, bb:20};
const obj2= {aa:20, cc:40};

const result = {...obj2, ...obj1}; // aa: 중복은 마지막에 오는 값
console.log(result);

const result2 = {...obj2, ...obj1, dd:50, bb:100};
console.log(result2);

const data = [
    {date : '0402', todo: '놀기'},
    {date : '0403', todo: '공부하기'},

]

console.log(...data); //{}
console.log([...data],{date:'0302',todo:'밥먹기'}); // [{}]
console.log(data);