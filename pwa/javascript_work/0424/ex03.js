console.log('완벽하게 될까');
const test = await fetch('https://github.com/dron512/pwa/blob/main/test.html')

const res = await test.text();
console.log(res);

console.log('이것도 되냐');
// console.log(test);

async function doA(){
    return 'test'
}
console.log(doA());