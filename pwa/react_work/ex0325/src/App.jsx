import './App.css'
import {useState} from "react";
import User from "./user.jsx";
import TextInput from './TextInput.jsx';


function App() {
    const [count, setCount] = useState(0)
    let test = 0;
    // const mystyle = {border: '1px solid red'}; -> style={mystyle}
    // const func = () => { $h1.innerHTML = '변경;}';
    // const $h1 = document.getElementById("test-h1");

    const [mystyle, mm] = useState({border:'1px solid red'});

    const func = () => {
        test = 20;
        console.log(test);
        setCount(count + 1);
        mm({border:'1px solid red', backgroundColor:`rgb(100,200,${count})`});
    };

  return (
    <>
        <TextInput/>  
        <User></User>
        <h1>count = {count}</h1>
        <h1 id='test-h1'>test = {test}</h1>
        <button style={{border: '1px solid red'}} onClick={func}>누름</button>

    </>
  )
}

export default App
