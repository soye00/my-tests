import React, { useState } from 'react'
import CC from './components/CC'


function App1() {

    const [style, setStyle] = useState({ 
        border: "1px solid rgb(150,130,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(200,230,230)",
        backgroundColor: "rgb(200,20,,100)"
    })

  return (
    <>
        <div>
            <h1>App1</h1>
            <button onClick={() => setStyle({...style,color:"blue"})}>blue</button>
            <button>red</button>
            <button>white</button>

        </div>
        <CC style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </CC>
        <CC style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </CC>
        <CC style={style}>
            <h1>자식태그</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quidem ducimus distinctio, fuga aliquid modi nam odit eveniet, porro dolor obcaecati, inventore quod quaerat maiores rerum non repudiandae vero.</p>
        </CC>
    </>
  )
}

export default App1