var a = null;
if(!a){
    console.log("실행되나");
}
// -> null 부정 하면 트루 -> 실행
console.log(Boolean(a));
var b = {};
console.log(Boolean(b));
var c = [];
console.log(Boolean(c));
// 빈 {},[] -> true

if({}){
    console.log("실행된다.");
}