class MyArray extends Array{
   uniq(){
       const Myarr = new Set(this);
       console.log(`중복제거 = ${[...Myarr]}`);
   }
   average(){
       const result = this.reduce((a,b)=>{
           return a + b;
       })/this.length;
       console.log(`평균 = ${result}`);
   }
}

const arr = new MyArray(10,20,30,30,40);
// 객체 생성하는 방법은 1. 문자리터럴 2.new 예약어 사용

console.log(arr);

//중복 제거 함수 X
const uniqArr = arr.uniq();

//평균값 함수 X
const avg = arr.average();