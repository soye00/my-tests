async function aa(){
    return ('test');
}

/*
async -> 일정 시간이 걸릴 수 있다
promis 꺼내는 방법
1. async await 사용
2. then() 사용
 */

const baa = await aa();
console.log(baa);

aa().then((baa) => {
    console.log(baa);
});