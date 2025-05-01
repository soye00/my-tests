/*
Promise
pending => 대기
resolve 성공 reject 실패
settled 상태(resolve,reject)

resolve 처리 방법 => then await
reject 처리 방법 => 콜백메서드 catch() try catch  

 */

const reqData = () => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(1);
        },3000);
    });
}
const reqData2 = () => {
    return new Promise((resolve,reject) => {
        return setTimeout(() => {
            reject('특정 에러가 발생');
        },3000);
    });
}
const reqData3 = () => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(3);
        },3000);
    });
}

// try{}catch{}
try{
    const result = await Promise.all([reqData(), reqData2()]);
    console.log(result);
}catch (e){
    console.log('에러발생'+e);
}



// Promise.all().then().catch()
// Promise.all([reqData(),reqData2(),reqData3()])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{console.log(err)})
// console.log('종료되었습니다.');

