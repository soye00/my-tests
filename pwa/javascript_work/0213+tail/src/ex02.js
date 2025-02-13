var a = NaN;
var b = NaN;

console.log(a===b); //-> false

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

var c = {
    a : 10,
    b() {
        console.log("b함수입니다.");
    }
}
c.b();