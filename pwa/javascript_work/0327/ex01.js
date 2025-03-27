
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0,2));
console.log(arr.slice(2,4));

function sum(){
    console.log([...arguments]);
    const result = [...arguments].map((item)=>{
        console.log(item);
        return `<div>item = ${item}</div>`;
    })
    console.log(result);
}

/*
const result1 = [...arguments].map((item)=> (
    `<div>item = ${item}</div>`
));
화살표 함수에서 객체(=함수)가 리턴될때 () 소괄호 사용 -> return 생략가능!
{} -> return 적어주기! 생략 불가 !!
 */

sum(1,2,3,4,5);


/*
👆 배열 []

배열을 문자열로 -> join();
배열 뒤집기 -> reverse();
배열 요소 채우기 -> fill();

Array.from(); ->  콜백 함수의 반환값으로 구성된 배열 반환






 */