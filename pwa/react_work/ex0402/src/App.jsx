import {useEffect, useRef, useState} from 'react';
import './App.css';
import Child from "./components/Child.jsx";



function App() {
  const [count, setCount] = useState(0)
  const [aa,setAa] = useState(10);
  const myRef = useRef(null);
  const inputRef = useRef(0);

  //최초의 한번만 로딩됨
  useEffect(() => {
      console.log('부모 useEffect');
  },[aa])
    // aa 값이 변경될 때 마다 호출

  return (
    <>
        <input type="number" ref={myRef} />
        <button onClick={() => {myRef.current.focus();
            console.log(myRef.current.value);}}>focus</button>
        <button onClick={() => {inputRef.current = inputRef.current +1}}>ref변경 inputRef = {inputRef.current}</button>
      <Child count={count}></Child>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() => setAa((aa) => aa +1 )}>aa is {aa}</button>
      </div>
    </>
  )
}

export default App
