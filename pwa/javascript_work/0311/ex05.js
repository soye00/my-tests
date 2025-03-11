// 비동기적 : 가지고 오는데 시간 필요 ㅣ
// then await 같이 사용해야 함

// fetch 여기 소스를  가지고 와라
fetch('https://cjo3o.github.io/p2-jim/header.html')
    // 가지고 온 소스를 string 으로 변환해라
    .then(response => response.text())
    // string 으로 변환한 것을 data 라는 변수에 넣어라
    .then(data => {
        // data 안에 있는 소스 출력
        console.log(data);

    })