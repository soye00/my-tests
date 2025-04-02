const target = 'color colour';

const arr = target.match(/colou+r/g);
// ? u가 0번 포함 매칭 포함되었을수도 아닐수도
// + u가 1번 이라도 나오는 거 매칭 포함된 것을
console.log(arr);

const target2 = 'A AA B BB Aa Bb';
const regExp = /[AB]+/g;
// [] 내의 문자는 or로 동작

const str = 'abc@naver.com';
const re = /[\w]+@+[A-Za-z]+.[A-Za-z]+]/;

const arr2 = str.match(re);
console.log(arr2);

console.log(re.test(str));

// ^ = not : [^0-9] -> 숫자를 제외한 문자

