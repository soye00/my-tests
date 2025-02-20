
//콜백 함수
// 매개변수를 함수로 보내는 것

function test(x,y,z){
    console.log(x);
    console.log(y); //함수호출
    console.log(z);

    for(var i = 0; i < x; i++){
        y(); //함수출력
    }

}
test(3, //원시값 - 값 복사
    function (){console.log('yy')}, //함수리터럴 - 참조값 복사
    {a:10,b:20} //객체리터럴
);