import React, {useEffect,useState} from 'react';

function MyTime(props) {
    const [time, setTime] = React.useState(0);

    const [running, setRunning] = React.useState(true);
    const [interId, setInterId] = React.useState(0);


    useEffect(() => {
        if(running) {
            const interId = setInterval(() => {
                setTime((time) => {
                    return time + 100
                });
            }, 100);
            setInterval(interId);
            console.log('시작됨');
            console.log('running = ' + running + 'interId =' + interId);
        }else{
            console.log('멈춤');
            console.log('running = ' + running + 'interId =' + interId);
            clearInterval(interId);
        }
    }, [running]);

    return (
        <div>
            <h1>타이머 {time}</h1>
            <button onClick={() => setRunning(true)}>시작</button>
            <button onClick={() => setRunning(false)}>멈춰</button>
            <button>리셋</button>

        </div>
    );
}

export default MyTime;