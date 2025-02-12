function test(str=''){
    // str = str|| '';
    return str.length;
}
const value = test();
const value1 = test('hi');

console.log(value);
console.log(value1);