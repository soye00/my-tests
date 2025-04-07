import React, {useEffect, useRef, useState} from 'react';

function Lotto(props) {
    const [drwNo, setDrwNo] = useState(1166);
    const [date, setDate] = useState([]);
    const [firstAccumamnt, setFirstAccumamnt] = useState([]);
    const [firstPrzwnerCo, setFirstPrzwnerCo] = useState([]);
    const [firstWinamnt, setFirstWinamnt] = useState([]);
    const [numbers, setNumbers] = React.useState([]);
    const [myNumbers, setMyNumbers] = React.useState([]);
    const inputRef = useRef(null);

    async function getMyNumbers() {
        // [...(new Array(6))].map(
        //     (_, i) => Math.trunc(Math.random() *46 )+1
        // );

        const arr = new Set(); // 중복 허용 X
        do{
            arr.add(Math.trunc(Math.random() *45) + 1 );
        }while(arr.size !== 6)

        console.log(arr);
        setMyNumbers([...arr]);
    }

    async function getNumbers() {

        const inputValue =  drwNo || inputRef.current.value || 1166;

        // inputRef.current.value = inputValue;

        // 로또 서버에 가서 1166회차 가져와
        const text = await fetch(`/api/common.do?method=getLottoNumber&drwNo=${inputValue}`);
        // 가져왔는데이터 text -> json 바꿔줘
        const res = await text.json();
        console.log(res);

        setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6]);
        setDrwNo(res.drwNo);
        setFirstAccumamnt([res.firstAccumamnt]);
        setFirstPrzwnerCo([res.firstPrzwnerCo]);
        setFirstWinamnt([res.firstWinamnt]);
        setDate([res.drwNoDate]);

        inputRef.current.value = inputValue;


    }

    useEffect(() => {
        getNumbers();
    },[
        drwNo
    ])


    const handlePrev = () => setDrwNo((drw) => drw - 1);
    const handleNext = () => setDrwNo((drw) => drw + 1);


    return (
        <div>
            <h1>lotto</h1>
            <input type="text" ref={inputRef}/>
            <h1>{drwNo}회 당첨결과</h1>
            <h2>1등 총 당첨금 {firstAccumamnt.toLocaleString()}원</h2>
            <h2>{firstPrzwnerCo}명 / {firstWinamnt.toLocaleString()}원</h2>
            <h2>날짜 : {date}</h2>


            <button onClick={handlePrev}>이전</button>
            <button onClick={getNumbers}>조회</button>
            <button onClick={handleNext}>다음</button>
            <div style={{ display: "flex", gap: "1rem" }}>
                {numbers.map(number => (
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: `rgb(100,150,200)`,
                            width: '4rem',
                            height: '4rem',
                            textAlign: 'center',
                            lineHeight: '4rem',
                        }}
                        key={number}>{number}</div>
                ))}
            </div>
            <button onClick={getMyNumbers}>추첨</button>
            <div style={{ display: "flex", gap: "1rem" }}>
                {myNumbers.map(number => (
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: `rgb(200,150,200)`,
                            width: '4rem',
                            height: '4rem',
                            textAlign: 'center',
                            lineHeight: '4rem',
                        }}
                        key={number}>{number}</div>
                ))}
            </div>

        </div>
    );
}

export default Lotto;