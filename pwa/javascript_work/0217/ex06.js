function solution(my_string, n) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        for(let j = 0; j < n; j++) {
            answer = answer + my_string[i];
        }
    }
    return answer;
}

console.log(solution('hello',3));

//
// function solution(my_string, n) {
//     var answer = '';
//     for(let i = 0; i< my_string.length; i++)
//         answer+=my_string[i].repeat(n); 🤸‍♀️🤸‍♂️
//
//     return answer;
// }