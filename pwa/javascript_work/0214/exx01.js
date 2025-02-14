//문자열의 합 -> 문자를 숫자로 가능 ?
// 문자열.. 의.. 합... 문자열 -> 숫자 배열로 가능!!?????

function solution(num_str) {
    var answer = num_str.split("");
    let sum = 0;
    for(let i=0; i<answer.length; i++){
        sum += parseInt(answer[i]);
    }
    return sum;
}
console.log(solution("123456789"));





// var answer = "123456".split(""); //===>>> 문자기준으로 하나씩 잘라서 배열로 만들어주는 ["1","2"]["123","456"]
// for(;;){
// answer.length[i]

//let n = "123456"
//[...n] }
//n[i] ==> 문자열의 index==순번 length와 다르게 0부터 시작하는데 문자열에서도 사용 가능
//...변수 ==> spread 연산자 or 펼침 연산자 라고 하는데 내부의 요소들을 하나씩 펼쳐주는 끊어주는 그런거라고 생각하면 됨


