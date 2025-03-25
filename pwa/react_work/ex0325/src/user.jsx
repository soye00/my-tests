import {useState} from "react";


function User(){
    const [user, setUser] = useState({name:'홍길동', age:20})

    const addAge = () => {setUser({...user, age: user.age+1}) };

    return(
        <>
            {/*<h1>유저 = {JSON.stringify(user)}</h1>*/}
            <h2>이름 = {user.name}</h2>
            <h2>나이 = {user.age}</h2>
            <button onClick={addAge}>나이증가</button>
        </>
    );
}

export default User;