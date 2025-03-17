const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

// promise.then(res => {
//     console.log(res);
// }); // 1초 후 'done' 출력

const ret = await promise;
console.log(ret);