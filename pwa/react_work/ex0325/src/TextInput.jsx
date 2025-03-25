import React, {useState} from 'react'

export default function TextInput() {
    const [text, setText] = useState("초기값");
    const change = (event) => {
        setText(event.target.value);
    }
    const amove = (event) => {
        // a 태그의 기본동작은 페이지 이동
        // 기본 동작을 막는다
        event.preventDefault();
        // 이벤트 두개 걸렸으면 작동안되게 막는거
        event.stopPropagation();
    }
    const doDiv = () => {
        console.log("div 누르면 출력됨")
    }
  return (
    <div onClick={doDiv}>
        <h1>TextInput</h1>
        <input value={text} onChange={change}/>
        <a href="http://www.naver.come" onClick={amove}>이동</a>

    </div>
  )
}

