// 함수 컴포넌트
function BB({aa,bb}){
    console.log(aa);
    console.log(bb);
    return(
        <div>
            <h2>BB</h2>
            <h3>aa = {aa}</h3>
            <h3>bb = {bb}</h3>
        </div>
    )
}

export default BB;
