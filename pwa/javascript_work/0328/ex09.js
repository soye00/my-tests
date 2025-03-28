// find findIndex

const myUsers = [
        {id:1, name:"일길동"},
        {id:2, name:"이길동"},
        {id:3, name:"삼길동"},
        {id:4, name:"사길동"},
];


const result = myUsers.find((item)=>{
    // console.log(item);
    return item.id === 2;
})

console.log('--------------------');
console.log(result);

//-> filter 는 [{}] 배열로 반환, find 는 {} 객체로 반환

const resultIndex = myUsers.findIndex((item)=>{
    // console.log(item);
    return item.id === 2;
})
console.log('======================');
console.log(resultIndex); // -> 인덱스 번호