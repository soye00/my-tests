const ss = Symbol();
if(ss){
    console.log('true'); // true 출력
}

const aa = 'asd';
const bb = ''; // -> false

if(aa){
    console.log('aa true');
}
if(!bb){
    console.log('bb true');
}