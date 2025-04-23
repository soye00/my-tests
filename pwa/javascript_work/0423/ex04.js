//debounce

function bb(callback,delay){
    let timerId;
    return() => {
        console.log('test');
        if(timerId) clearInterval(timerId);
        timerId = setTimeout(callback, delay);
    };
}


const aa = bb(function (){
    console.log('함수를 보냄');
},300)

aa();
aa();
aa();
aa();
aa();