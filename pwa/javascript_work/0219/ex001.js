/*
세변의 길이가 담긴 배열
가장 긴 변의 길이가 두변의 합보다 작아야 1
아니면 2 리턴 !
가장 긴 변 = 가장 큰 최대값 구하고
최대값이 나머지 두개 합보다 작다
작으면 -> 1 삼각형 성립
아니다 -> 2 삼각형 안됨
 */

function solution(sides){
    sides.sort((a,b)=> b-a);
    if(sides[0] < sides[1]+ sides[2]){
        return 1;
    }
    else{
        return 2;
    }
}

console.log(solution([1,2,3]));
console.log(solution([3,6,2]));
console.log(solution([199,72,222]));
//[3,3,2,1] 조건에 중복값을 허용해주지 않는다
//new Set([1,2,3,3])==>> {1,2,3}
//[...new Set([1,2,3,3])]
//[]에서 사용 하는 함수
//sort((a,b)=>{a-b}) 오름차순 b-a 내림차순
//기능이 a==이전값 b==이후값
//sort() ==> 오름차순 정렬
//[?,?].sort((a==이전값,b==이후값)=>{return })
