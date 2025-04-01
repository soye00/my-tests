import React, { useMemo, useState } from 'react';
import Header from '@/layout/Header';


function Calcu() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const easyCalcu = (num) => {
    console.time('easy');
    console.timeEnd('easy');
    return num +100;
  }

  const hardCalcu = (num) => {
    console.time('hard');
    for (let index = 0; index < 1000000; index++) {
      num += index;
    }
    console.log('오래걸리는 계산');
    console.timeEnd('hard');
    return num;
  };

  const hardSum = useMemo(()=> {
    return hardCalcu(hardNum);
  },[hardNum]);


  return (
    <>
    <Header></Header>
    <h1>Calcu</h1>
    <div style={{border: '1px solid black'}}>        
        <h1>Calcu</h1>
        <p>hardCalcu = {hardSum}</p>
        <button onClick={() => setHardNum(hardNum + 10)}>
          어려운 숫자 증가
        </button>
    </div>
    <div style={{border: '1px solid black'}}>
        <p>easyCalcu = {easyCalcu(easyNum)}</p>
        <button onClick={() => setEasyNum(easyNum + 10)}>
          쉬운 숫자 증가
        </button>
    </div>
    </>
  );
}

export default Calcu;
