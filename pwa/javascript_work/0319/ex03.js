// 문자열 string 을 자바스크립트 object 로 변경 예시

// string -> object
// sessionStorage localStorage 사용할 때
// JSON.parse() 사용 

const aa = '{"a":"10", "b":"11"}'

const obj = JSON.parse(aa);
console.log(obj.a);
console.log(obj.b);

// object -> String 변경할때  JSON.stringify() 사용