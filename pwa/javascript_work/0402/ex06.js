const url = "http://www.example.com";

const re = /^https?:\/\//;
// 시작이 http가 맞고 s 가 있을수도 없을수도
// <-> [^http]는 not

// 주소가 url 이 맞는지 확인

console.log(re.test(url));
console.log(url.match(re));