import { useState } from 'react'
import './App.css'
import Aa from "./components/AA.jsx";
import MyTime from "./components/MyTime.jsx";



function App() {
  const[style, setStyle] = useState("ON")
  const [showAA, setShowAA] = useState(true);
  return (
    <>
        <MyTime></MyTime>
        {style === "ON" ?
            (<h1 style={{backgroundColor:'rgb(100,200,100)'}}>on = {style}</h1>)
            :(<h1 style={{backgroundColor:'rgb(200,100,100)'}}>off = {style}</h1>)
        }
        <div>
            <button onClick={() => setStyle(style === "ON" ? "Off" : "ON")}>toggle</button>
        </div>
        <div>
            {showAA && <Aa></Aa>}
            <button onClick={() => setShowAA(!showAA)}>toggle</button>
        </div>
    </>
  )
}

export default App
