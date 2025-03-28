class Users{
    constructor(users) {
        this.users = users;
    }
    findById(id) {
        const user = this.users.filter(item => item.id === id);
        console.log(user);
    }
    remove(id) {
        this.users = this.users.filter((item) => item.id !== id);
    }
}
const myUsers = new Users([
        {id:1, name:"일길동"},
        {id:2, name:"이길동"},
        {id:3, name:"삼길동"},
        {id:4, name:"사길동"},
    ]
);

console.log(myUsers);
myUsers.findById(1);

myUsers.remove(1);
console.log(myUsers);


// const users = [
//     {id:1, name:"일길동"},
//     {id:2, name:"이길동"},
//     {id:3, name:"삼길동"},
//     {id:4, name:"사길동"},
// ]


// 요소 추출

// id 가 2번인
// const user = users.filter((item)=>item.id === 2);
// console.log(user);

// function findById(id) {
//     const user = users.filter(item => item.id === id);
//     console.log(user);
// }
// // id 가 1번인
// findById(1);



// 요소 제거
//
// function remove(id){
//     const user = users.filter((item)=>item.id === id);
// }
// remove(2);
// console.log(users);


