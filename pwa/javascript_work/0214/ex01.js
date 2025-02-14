//null 병합 연산자
console.log(Boolean("")); //-> f
console.log(Boolean([])); //-> t
console.log(Boolean({})); //-> t

// || 좌항의 피연사자가 f -> 우항의 피연산자 대입
const a = "" || "기본문자열";

console.log(a);
console.log(a.length);

// ?? 좌항의 피연산자가 null, undefined -> 우항의 피연산자를 대입
const b = "" ?? "기본문자열";

console.log(b);
console.log(b.length);

//str 길이 반환 함수
function aa(str){
    str = str || '';
    return str.length;

}
console.log(aa());
console.log(aa('문자열'));

