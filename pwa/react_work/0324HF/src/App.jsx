import { useState } from 'react'
import './App.css'

function Header() {
    return <h1>header</h1>
}
function Footer() {
    return <h1>footer</h1>
}

function App(){
    const [count, setCount] = useState(0)

    return (
        <>
            <Header></Header>
            <h1>중간내용은 변경</h1>
            <Footer></Footer>
        </>
    )
}

export default App
