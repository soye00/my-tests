const re = /hello/i;
console.log(re.test('hello'));
console.log(re.test('Hello'));
console.log(re.test('world')); // f

const str = 'orange apple orange';
const res = str.replace(/orange/g, 'test');
console.log(res);

const res2 = str.replace(/orange/g, (match)=> {
    return match+"변경했음";
})

const res3 = str.replace(/orange/g, (match)=> '변경했음');

console.log(res2);
console.log(res3);

const price = '100원';
// 숫자를 찾아서 바꿔라
console.log(price.replace(/(\d+)/, (match)=> `${parseInt(match)*2}`));
