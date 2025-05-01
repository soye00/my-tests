// Promise.all() : 두개의 update 를 한 번에
// => 트랜잭션 (한꺼번에 수행되어야 할 연산을 모아놓은 것)

const reqData = () => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(1);
        },3000);
    });
}
const reqData2 = () => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(2);
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
// 6초 걸림
// reqData().then((result)=> {
//     console.log(result);
//     return reqData2();
// })
//     .then(result => {
//         console.log(result);
//         return reqData3();
//     })
//     .then(
//         result => {
//             console.log(result);
//         }
//     );

// 병렬처리 -> 3초만에 끝
const result = await Promise.all([reqData(),reqData2(),reqData3()]);
console.log(result);

