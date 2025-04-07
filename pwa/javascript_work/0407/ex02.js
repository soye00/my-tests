console.log(new Date());
console.log(new Date(2025,2,13)); // 02 -> 03월로 출력됨

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1); // 0~11 = 1월~12월
console.log(now.getDate()); // 0 : 일요일 ~ 6 : 토요일

now.setMonth(2);
console.log(now);

now.setDate(0); // 전 달 마지막 날 구하기
console.log(now);

console.log(Date.now()); // utc 시간
console.log(new Date(Date.now())); // utc -> 날짜형식 변경
console.log(new Date());


console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());