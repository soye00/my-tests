console.log('test');

fetch('http://localhost:5000/todos')
.then(res => res.json())
.then(data => {
    console.log(data);
})