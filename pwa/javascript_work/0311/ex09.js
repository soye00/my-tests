const str = "https://www.naver.com?a=이웅모";

const enstr = encodeURI(str);
const destr = encodeURI(enstr);

console.log(enstr);
console.log(destr);

const enComstr = encodeURIComponent(str);
const deComstr = encodeURIComponent(enComstr);

console.log(enComstr);
console.log(deComstr);