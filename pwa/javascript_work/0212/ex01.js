//제어문 if for while break continue switch

function solution(numbers) {
    var max_one = numbers[0];
    var max_two = numbers[1];

    for(var i=1;i < numbers.length;i++){
        if(max_one < numbers[i]){
            max_two = max_one;
            max_one = numbers[i];
        }
        if(max_two < numbers[i] && max_one > numbers[i]){
            max_two = numbers[i];
        }

    }
    // console.log(`max_one : ${max_one}`);
    // console.log(`max_two : ${max_two}`);
    return max_one * max_two;
}

const res = solution([1,2,3,4,5]);
console.log(res);