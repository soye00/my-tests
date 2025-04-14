// 객체 분해

const obj = {a:10, b:20};
console.log(obj);


const{a,b}=obj;
console.log(a);
console.log(b);



fetch('https://dummyjson.com/todos')
    .then(data => data.json())
    .then((json) => {
        const {todos} = json;
        // console.log(todos);
        const {todo} = todos[5];
        console.log(todo);
    })