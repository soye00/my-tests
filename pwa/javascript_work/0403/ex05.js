fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => {
        console.log(result);
        if(result.status.toString().startsWith('2')){
            console.log('정상');
            return result.json;
        }else{
            console.log('주소 잘못됨');
            throw new Error('에러입니다');
        }
    })
    .then(json => {
        console.log('일로온다');
        console.log(json)
    })
    .catch(e => {
        console.log('절로온다');
        console.log(e);
    });