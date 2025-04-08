import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import Lotto from './pages/Lotto'
import Home from './pages/Home'
import Mypage from './pages/Mypage'

function Test(){
  return(<><h1>Test</h1></>)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test></Test>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/lotto' element={<Lotto/>}></Route>
        <Route path='/mypage' element={<Mypage/>}></Route>
      </Routes>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

    </>

  )
}

export default App
