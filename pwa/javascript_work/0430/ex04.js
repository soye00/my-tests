(async () =>{
    // console.log('즉시함수 호출');
    const result = await fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos/10000')
    if(result.status !== 404) {
        const res = await result.json();
        console.log(res)
    }
})();

