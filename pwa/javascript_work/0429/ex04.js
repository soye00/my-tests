try{
    setTimeout(() =>{
        throw new Error('에러발생')
    },1000); // 강제종료
}catch (e){
    console.log(e);
}

console.log('종료');