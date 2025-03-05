// -> 복습
//
// var a = 10;
//
// console.log(a); // 실행환경에 따라 자동으로 global/window 설정됨

// // 🤍 -> 브라우저 전역객체 자동 선언
// console.log(window.a);
// // 🤍 NODE
// console.log(global.a);

//함수 선언문 - function = aa() {};
//함수 표현식 - const a = function() {};

// 타입변환 (숫자관련)
// var b = 20.5;
// // 올림
// console.log(Math.ceil(b)); // > 21
// // 내림
// console.log(Math.floor(b)); // > 20
// // 반올림
// console.log(Math.round(b)); // > 21

// 💛 변수 호이스팅
// console.log(c);
// var c = 10; // > undefined (에러 X)
//
// console.log(d);
// let d = 10; // > 에러 O 호이스팅 되지만, 초기화 전에 사용하면 에러
//
// console.log(e);
// const e = 10; // > 에러 O 호이스팅 되지만, 초기화 전에 사용하면 에러


//break continue
// break 문이 실행되면, 해당 반복문을 즉시 종료하고 반복문 아래의 코드로 흐름이 넘어감
// continue 문이 실행되면, 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 넘어감


// false : '' (빈문자) , undefined, null, 0
// 단축평가 ( 💜 논리연산자 : && - and, || - or)
// and - > 앞 t 뒤 반환, 앞 f 앞 반환
// 사과 그리고 배 -> 사과 t : 배도  // 사과 f : 사과만
// or -> 앞 t 앞 반환, 앞 f 뒤 반환
// 오렌지 또는 파인애플 -> 오렌지 t : 오렌지 // 오렌지 f : 파인애플
//
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true
// // 빈문자열, 빈객체는 true 반환

// 옵셔널 체이닝 ?. null/undefined 일 경우, 에러 없이 undefined 반환

// 🧡 null 병합 연산자 ??
// null,undefined ->
// const abc = '' ?? 'guest';
// const cba = 'guest' ?? '';
// console.log(abc); // > ''
// console.log(cba); // > guest

// const settings = {
//     theme: null,
//     language: "ko",
// };
//
// // 1) 단축 평가
// const userTheme = settings.theme || "light"; // "light"
// console.log(userTheme);
//
// // 2) 옵셔널 체이닝
// const userLanguage = settings?.language ?? "en"; // "ko"
// console.log(userLanguage);
//
// // 3) Null 병합 연산자
// const displayMode = settings.theme ?? "dark"; // "dark"
// console.log(displayMode);

//메서드 선언
/*
subtract : function (a,b) {
return a - b;
}
메서드 축약 표현 (권장하는)
add(a,b) {
return a + b ;
}
*/


// // 💙 전개 연산자
// const defaultSettings = {
//     volume: 50,
//     brightness: 70
// };
//
// const userSettings = {
//     brightness: 90,
//     theme: 'dark'
// };
//
// // const settings = { volume: defaultSettings.volume, brightness: defaultSettings.brightness };
// const settings = { ...defaultSettings, ...userSettings };
//
// console.log(settings);
// // { volume: 50, brightness: 90 > { ...defaultSettings, ...userSettings } 중복 있을 경우 마지막 값...userSettings, theme: 'dark' }

// 원시값 객체값
// 원시값 - 값 자체가 저장 -> 변경 할 수 X -> 불변
// 객체값 - 참조가 저장(동일한 객체를 가리키는) -> 객체 내부의 프로퍼티 변경 가능⭕

// 객체값 비교
//let objA = { x: 10 };
// let objB = { x: 10 };
// let objC = objA;
// console.log(objA === objB); // false, 서로 다른 참조이므로
// console.log(objA === objA); // true, 같은 객체 참조
// console.log(objA.x === objB.x); // // 내용값(원시값=참조값)은 true
// console.log(objC === objA); // true 같은 참조값 가르키는

//📌
// function aa(a){
//     a = 20;
//     console.log(`함수 aa안 a = ${a}`); // > 함수 aa안 a = 20
// }
// var a = 10; // 원시값 -> 값의 복사
// aa(a);
//
// console.log(`전역객체 a = ${a}`); // > 전역객체 a = 10
//
//
//
// function bb(obj){
//     obj.b = 20;
//     console.log(`function obj.b = ${obj.b}`); // > function obj.b = 20
// }
// const obj = {b : 10};
// bb(obj);
// console.log(`전역공간의 obj.a = ${obj.b}`); // > 전역공간의 obj.a = 20

