import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   "https://<project>.supabase.co",
//   "<your-anon-key>"
// );

function App() {
  const [count, setCount] = useState(0);
  const [birthYear, setBirthYear] = useState("");

  const [age, setAge] = useState("-");

  // useEffect(() => {
  //   const res = supabase.from('ice_res').select();
  //   console.log(res);
  // }, []);
  
  

  

  return (
    <>
      <h1>count = {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count * 0)}>리셋</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <p>2025년 기준 현재 나이는 {age}입니다.</p>
      <input type="text" value={birthYear} name="" id="" onChange={} />
      <button onClick={}>나이계산하기</button>
    </>
  );
}

export default App;
