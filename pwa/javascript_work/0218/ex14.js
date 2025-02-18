
// dot 은 어디 사분면에 속하는지
/*
1 = 양수 양수 ( + + ) = x > 0, y > 0
2 = 음수 양수 ( - + ) = x < 0, y > 0
3 = 음수 음수 ( - - ) = x < 0, y < 0
4 = 양수 음수 ( + - ) = x > 0, y < 0

-> x > 0 x가 양수 = 1,4
 🎄=> x가 양수이면서 y도 양수 -> 1, y는 음수 -> 4
-> x < 0 x가 음수 = 2,3
 🎄=> x가 음수이면서 y도 음수 -> 3, y는 양수 -> 2

 */

function solution(dot) {
    var answer = 0;
    let x = dot[0];
    let y = dot[1];
    if (x>0) {
        if(y>0){
            answer = 1;
        }
        else if(y<0){
            answer = 4;
        }
    }
    if (x<0){
        if(y>0){
            answer = 2;
        }
        else if(y<0){
            answer = 3;
        }
    }
    return answer;
}

console.log(solution([1,2]));
console.log(solution([-7,9]));


// function solution(dot) {
//     var answer = 0;
//     const x = dot[0];
//     const y = dot[1];
//
//     if (x > 0 ✨&&✨ y > 0) answer = 1
//     if (x < 0 && y > 0) answer = 2
//     if (x < 0 && y < 0) answer = 3
//     if (x > 0 && y < 0) answer = 4
//
//     return answer;
// }