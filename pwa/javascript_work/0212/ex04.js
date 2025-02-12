var c ={
    value: '홍길동',
};
var d = c.value;
console.log(d);

var a = undefined;
var b = a?.value;  //-> ? : 에러를 해결하기 위해 사용 - 우항의 프로퍼티를 이어감
console.log(b);



