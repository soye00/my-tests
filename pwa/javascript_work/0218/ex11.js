function test(){
    console.log('start');
    return;
    console.log('End'); // -> 출력 ❌
}
test();

//return 반환문은 생략 가능, 세미콜론 자동 삽입 기능