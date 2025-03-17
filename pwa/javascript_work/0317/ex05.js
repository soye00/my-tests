//클로저함수

function outer(){
    let a = 0;
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve("done"), 1000);
    });
}

// await 사용
// const out = outer();
// const res = await out;
// console.log(res);


// then 사용
outer().then(res=>{
    console.log(res);
});