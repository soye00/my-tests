fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos/1000')
    .then(res => {
        // console.log(res)
        if(res.status !== 404) return res.json();
        else return '실패';
    })
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })