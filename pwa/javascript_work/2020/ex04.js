/*
두 배열이 얼마나 유사한지
문자열 s1
문자열 s2
비교하기

s1 = ["a","b","c"]
s2 = ["com","b","d","p","c"]
중복 "b", "c" 개수 -> 2 리턴

s1[i] i while length 동안?
s1 length 동안
s2 ㅓ라어ㅏ러ㅏㄴ어ㅏㅓ람너

에스일 의 영번째 와 에스이의 영번째 , 한번째 , 두번째 비교
에스일의 첫번째와 에스이의 영번째 첫번째 두번째 비교..


 */


function solution(s1, s2) {
    var answer = 0;
    for( let i = 0; i < s1.length ; i++ ) {
        for( let j = 0; j < s2.length ; j++ ) {
            if (s1[i] === s2[j]) {
                answer++
            }
        }
    }
    return answer;
}
console.log(solution(["a", "b", "c"],["com","b","d","p","c"]));
console.log(solution(["n","omg"],["m","dog"]));


// //💛filter
// function solution(s1, s2) {
//     const intersection = s1.filter((x) => s2.includes(x));
//     return intersection.length;
// }
