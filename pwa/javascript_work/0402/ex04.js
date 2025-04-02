const str = `is this all ok? is
Is this all ok is?`;
const re = /^is/igm;
// i 대소문자 구분없이 검색
// g 글로벌 전체에서 검색
// m 멀티행 검색 

// test 메서드 => 매칭 결과를 불리언 값으로 반환

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));

const aa = 'a1b2c3d4e5';

console.log(aa.split(/\d/));