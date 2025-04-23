let count = 1;


function bb(){
    console.log('bb');
}

// setInterval 반복 setTimeout 한 번
const inter = setInterval(() => {
    count++;
    console.log('aa');
    if(count === 5) clearInterval(inter);
},1000);
bb();


