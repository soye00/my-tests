new Promise((resolve) => {resolve('정상')})
    .then((res)=> {console.log(res)}).finally(() => {console.log('무조건실행')});

// 가독성 불편
new Promise((resolve,reject) => {reject('에러')})
    .then((res)=> {console.log(res)},(e)=>{console.log(e);});

new Promise((resolve,reject) => {reject('에러')})
    .then((res)=> {console.log(res)}).catch((e)=>{console.log(e);});