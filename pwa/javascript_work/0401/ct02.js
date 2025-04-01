// 가위바위보

/*
가위는 2
바위는 0
보는 5

가위바위보를 순서대로 나타낸 문자열 rsp 가 주어질 때
rsp 에 저장된 가위바위보를 모두 이기는 경우를 순서대로 나타낸 문자열을 리턴

ex)
rsp 2 -> 0 가위는 바위로 이김
205 -> 052

가위2 -> 바위0
바위0 -> 보5
보5 -> 가위2

2 면 0
0 이면 5
5 이면 2
 */

function solution(rsp) {
    var answer = rsp.split('').map((item) => {
        if(item==2) return 0;
        if(item==0) return 5;
        if(item==5) return 2;
    }).join('');
    return answer;
}
console.log(solution("205"));
console.log(solution("2021"));


// let arr = "123";
// let b = arr.split('').map((item) => {
//     if(item==1)return 4;
//     if(item==2)return 5;
//     if(item==3)return 6;
// }).join('');
// console.log(b);
