class AA{
    // super X constructor O
    doA = function (){
        console.log('일반함수')
    }
    // super O constructor X
    doB(){
        console.log('메서드')
    }
    // super X constructor X
    doC = () => {
        console.log("화살표 함수")
    }

}

const aa = new AA();
aa.doA();
aa.doB();
aa.doC();