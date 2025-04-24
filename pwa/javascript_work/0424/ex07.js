const axios = require("axios");


fetch('https://dummyjson.com/todos',{method:'POST'})
    .then(res => res.json())
    .then(data => {
        console.log(JSON.stringify(data,null, 2));
    })

axios.get('https://dummyjson.com/todos')
    .then(res => {
        console.log(res.data.todos);
    })

