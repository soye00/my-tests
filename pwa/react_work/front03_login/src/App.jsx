import './App.css'
import axios from "axios";
import {useState} from "react";

function App() {
  const [state, setState] = useState("");

  const login = async () =>{
      const res =
          await axios.post(
              `${import.meta.env.VITE_API_URL}/login`,
              { email: "aaa@gmail.com",password:"1234"},
              {withCredentials: true}
          )
      console.log(res);
      // setState(res.data);
  }

    const logout = async () =>{
        const res =
            await axios.get(
                `${import.meta.env.VITE_API_URL}/logout`,
                { withCredentials: true },
            )
        setState(res.data);
    }

      const mypage = async () =>{
          const res =
              await axios.get(`${import.meta.env.VITE_API_URL}/mypage`,
          {withCredentials: true} // 쿠키 설정
          );
          setState(JSON.stringify(res.data));
      }


  return (
    <>
        <h1>{state}</h1>
        <button onClick={login}>로그인</button>
        <button onClick={logout}>로그아웃</button>
        <button onClick={mypage}>마이페이지</button>

    </>
  )
}

export default App
