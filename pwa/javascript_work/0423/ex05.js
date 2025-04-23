const throttle = () =>{
    let timerId;
    return () => {
        if (timerId) return;
        setTimeout(() => {
            console.log('콜백함수 호출됨');
            timerId = null;
        }, 300);
    }
}

const aa = throttle();

aa();
aa();
aa();
aa();