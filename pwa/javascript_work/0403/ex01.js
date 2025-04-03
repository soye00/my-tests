const str1 = '1234';
const str2 = 'abcdefghijklmnopqrst';
const str3 = 'ab12';

const re = /[\d]+/; //숫자를 포함
const re2 = /^\d+$/; // 숫자만

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));

console.log(re2.test(str1));
console.log(re2.test(str2));
console.log(re2.test(str3));