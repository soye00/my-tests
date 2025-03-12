//문자열 다루기 기본
/*
문자열 s
-> 길이가 4 혹은 6인 숫자로만 이루어져 있으면 t
-> 아니면 f

 */
/*
-> 정규표현식

^: 문자열의 시작.
$: 문자열의 끝.
\b: 단어 경계.

.: 모든 문자(줄바꿈 제외)와 매칭.
\d: 숫자 [0-9]와 매칭.
\D: 숫자가 아닌 문자와 매칭.
\w: 단어 문자 [A-Za-z0-9_]와 매칭.
\W: 단어 문자가 아닌 문자와 매칭.
\s: 공백 문자(스페이스, 탭 등)와 매칭.
\S: 공백 문자가 아닌 문자와 매칭.

수량자
수량자는 패턴이 반복되는 횟수를 지정
*: 0번 이상 반복.
+: 1번 이상 반복.
?: 0번 또는 1번.
{n}: 정확히 n번 반복.
{n,}: n번 이상 반복.
{n,m}: n번 이상, m번 이하 반복.


 */
// const reg = /[a-b]+/;
//
// console.log(reg.test('abc'));
// console.log(reg.test('1020'));
//
// console.log(typeof reg);

function solution(s) {
    const re = /^\d+$/;
    return re.test(s) && (s.length === 4 || s.length === 6);
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('1234564'));
