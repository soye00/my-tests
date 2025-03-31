import React, {useEffect} from 'react';

function Aa(props) {
    let count = 1;
    useEffect(() => {
        console.log("Aa 에 useEffect 호출")
        const myInter = setInterval(() => {
            console.log(`count = ${count++}`);
        },1000)
        return () => {
            console.log("Aa 컴포넌트 언마운트됨(삭제)")
            clearInterval(myInter);
        }
    }, []);
    return (
        <div>
            <h1>AA Component</h1>
        </div>
    );
}

export default Aa;