import { useEffect, useState } from 'react'
import './App.css'
import AA from './components/AA.jsx';
import BB from './components/BB.jsx';



// App 컴포넌트
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] =useState('홍길동');

  //count 값이 변경될때마다 콜백함수 호출
  useEffect(()=>{
    setCount(Number(localStorage.getItem('count')));
    console.log("UseEffect 호출됨")
  },[])
  // [] 최초의 한번만 실행 [count] 카운트가 변경될때만 실행
  
  const addCount = () => {setCount(count + 1); localStorage.setItem('count', count+1)};
  const subCount = () => {setCount(count - 1); localStorage.setItem('count', count-1)};
  const changeName = () => {setName(name + '!')};

  return (
    <>
      <BB addCount={addCount} subCount={subCount}></BB>
      <AA aa="10" bb={20}></AA>
      <h1>name = {name}</h1>
      <button onClick={changeName}>이름변경</button>
      <h1>count = {count}</h1>
      <button onClick={addCount}>count 증가</button>
      <button onClick={subCount}>count 감소</button>
    </>
  )
}

export default App
