const str = 'abcdef';

console.log(str.slice(1,4));
console.log(str.substring(1,4)); // 1에서 4이전까지
console.log(str.substring(2)); // 2부터 끝까지

console.log(str.substring(-1)); // > abcdef (음수 = 뒤에서부터)는 불가능⭐

console.log(str.toUpperCase()); // 대문자로
console.log(str.toLowerCase()); // 소문자로


//공백제거

const aa = '         bbd         ';
console.log(aa);
console.log(aa.trim());

// aa.trimStart() 앞 제거 
// aa.trimEnd() 뒤 제거



const cc = 'a b c d e f ';
console.log(cc.replace(/\s/g, '')); // g 없으면 맨 처음 하나만, g는 모든곳에서
console.log(cc.replaceAll(' ',''));

