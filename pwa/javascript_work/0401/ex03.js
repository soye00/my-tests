class AA{
    static MYNUM = 10;

    static doA(){
        console.log('doA');
    }
    doB(){
        console.log('doB');
    }
}

const aa = new AA();
aa.doB();

AA.doA();
console.log(AA.MYNUM);