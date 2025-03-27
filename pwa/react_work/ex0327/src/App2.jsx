import React, { useState } from 'react'
import DD from './components/DD'


function App2() {

    const[count, setCount] = useState(0);
    console.log("랜더링 이루어짐");

    const style ={
        border: "1px solid rgb(150,130,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(200,230,230)",
        backgroundColor: "orange"
    }

  return (
    <>
        <button onClick={() => {setCount(count+1);}}>랜더링 이루어짐</button>
        <div>
            <h1>App1</h1>
            
        </div>
        <DD style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </DD>
        <DD style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </DD>
        <DD style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </DD>
    </>
  )
}

export default App2