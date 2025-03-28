
function mysort(a,b){
    return a.id - b.id; // id로 오름차순


}

const todos = [
    {id:4, content:"CSS"},
    {id:2, content:"JAVASCRIPT"},
    {id:1, content:"HTML"},
]

todos.sort(mysort);
console.log(todos);