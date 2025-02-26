const aa = require('randomcolor');
const readline = require('readline/promises');

//node 내장객체
// console.log(process);

// console.log(aa());
// console.log(readline);

//
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// await 사용자 입력, async 함수 선언할 때
async function getInput(){
    const name = await rl.question('이름을 입력해봐');
    console.log(`name = ${name}`);
    rl.close();
};

getInput();

// 콜백함수 require('readin')
// rl.question('이름입력해봐\n', name =>{
//     console.log(`name = ${name}`);
//     rl.close();
// });


