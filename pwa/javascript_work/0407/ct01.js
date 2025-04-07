const arr = "hi12392";

console.log(arr.match(/\d/g).sort((a, b) => b-a));


function solution(my_string) {
    return my_string.match(/\d/g).map(Number).sort((a, b) => a-b);
}

console.log(solution("hi12392"));
console.log(solution("p2o4i8gj2"))