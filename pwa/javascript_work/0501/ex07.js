const a = () =>{
    throw new Error('에러발생');
};

const b = () => {
    a();
}

const c = () =>{
    b();
}

try{
    c();
}catch (e){
    console.log(e);
}

console.log('종료됨');