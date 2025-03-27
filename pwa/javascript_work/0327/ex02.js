/*
깊은 복사 얕은 복사

얕은 복사 => 같은 값을 가리키는 (주소값이 같다)

깊은 복사 => 새로운 메모리 생성

 */

const arr = [1, 2, 3, 4, 5];
// 얕은 복사 - 주소값이 같음
const brr = arr;

// 깊은 복사
const crr = [...arr];
const drr = arr.slice(); // -> slice, map 도 깊은 복사

