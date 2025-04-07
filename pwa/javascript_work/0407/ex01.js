console.log(Math.abs(-5));
console.log(2**3);
console.log(Math.cbrt(27));

// 0~ 1 사이 랜덤숫자
// 0.00000000000009 ~ 0.99999999999999999
console.log(Math.random());

// 50 ~ 100 사이 랜덤
console.log(parseInt(Math.random()*50)+50);
console.log(parseInt(Math.random()*50)+50);
console.log(parseInt(Math.random()*50)+50);

console.log(Math.trunc(3.2323)); // 소수점 지우기


// 함수로 만들기
function getNumber(){
    return Math.floor(Math.random()*50)+50;
}
console.log(getNumber());


function getNumber2(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(getNumber2(1, 46));

now.setDate(0); // 전달 마지막날 구하기
console.log(now);

console.log(Date.now()); // utc 시간
console.log(new Date(Date.now())); // utc -> 날짜형식 변경
console.log(new Date());


console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

const myDate = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`;
console.log(myDate);