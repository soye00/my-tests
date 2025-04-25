fetch('http://localhost:5000/todos',{
    method:"POST",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
        "todo": "니ㅏ러ㅣ나어린어",
        "completed": false
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
});