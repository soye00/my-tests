function solution(num_list) {
    var answer = [];
    for( let i = 0; i < num_list.length; i++ ) {
        if(num_list[i] % 2 === 0){
            answer[0] = answer[0] ?? 0;
            answer[0] = answer[0] + 1
        } else {
            answer[1] = answer[1] ?? 0;
            answer[1] = answer[1] + 1
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));