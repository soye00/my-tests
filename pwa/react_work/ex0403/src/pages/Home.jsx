import React from 'react'
import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0);
  return (
    <>
        <div>Home</div>
        <div>
            <h2>count = {count}</h2>
            <button onClick={() => {setCount(count + 1)}}>count 증가</button>
        </div>
    </>
  )
}

export default Home