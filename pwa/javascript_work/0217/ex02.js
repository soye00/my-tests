const setting = {
    theme: null,
    language: 'ko',
    person : {
        name : '홍길동'
    }
}
//원시값으로 변경
//String(10) = '10'
//Number('3.5') = 3.5
//Boolean('') = false

const userTheme = setting.theme || 'light'; // null=false ||  'light' => or(||)은 앞이 f 이면 뒤가 결과값
console.log(`userTheme = ${userTheme}`); //-> light

const userLanguage = setting?.language;
console.log(`userLanguage = ${userLanguage}`);

const userName = setting.person.name; //setting 안 person 안 name
console.log(`userName = ${userName}`);

const b = setting.a?.b ?? 'a가 없습니다.';
// ->  ?. 옵셔널 체이닝 속성이 존재하는지 안전하게 접근할 때 에러 없이 반환.
console.log(b); //-> undefined -> ?? 앞 언디널이면 -> 뒤가 결과값

