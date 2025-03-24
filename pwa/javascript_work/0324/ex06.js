// function doA(x,y){
//     return x + y ;
// }
function doA(x,y=0){
    return x + y ;
}
console.log(doA(10)); // NaN -> y: undefined 10 -> 기본값 파라미터


// 옵셔널 파라미터

const res = {
    data: {
        user: {
            id: 'asd1020320'
        }
    }
}

function doB(res){
    // console.log(res.data.user.id); // > id 값이 null이면 에러 !
    console.log(res.data?.user?.id);
}
doB(res);