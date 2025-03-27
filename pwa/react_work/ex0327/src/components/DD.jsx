import React, { useState } from 'react'


function DD({style,children}) {

  const [childStyle,setChildstyle] = useState(style);

  return (
    <>
    <button onClick={() => setChildstyle({...style,color:"blue"})}>blue</button>
    <button onClick={() => setChildstyle({...style,color:"red"})}>red</button>
    <button onClick={() => setChildstyle({...style,color:"white"})}>white</button>
    


    <div style={childStyle}>
      <div>CC</div>
      {children}
    </div>
    
    </>
  )
}

export default DD