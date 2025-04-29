fetch('https://6809e0811f1a52874cde2bd6.mockapi.io/todos')
    .then((res) => {
        console.log('여기 들렸다감')
        return "test";
}).then((result)=>{
    console.log(result);
}).catch((e) => {
    console.log(e);
});