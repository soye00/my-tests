import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from "./Test.jsx";


//태그를 사용하게 되면 그 안에 있는 함수가 호출되는
createRoot(document.getElementById('root')).render(
  // <StrictMode> // -> 있으면 2번 랜더링
    <Test />
  // </StrictMode>,
)
