function AA(){}

AA.doA = function (){
    console.log('정적 메서드 doA');
}

const test = new AA();

AA.doA(); // 정적 메서드 호출
test.doA(); // test 인스턴스안에는 doA() 함수 없음.

// 자바스크립트 대표적인 정적 메서드는 Math.ceil Math.floor Math.round 등
// const math = new Math 로 생성해서 사용하지 않고
// Math.XXX로 바로 사용 