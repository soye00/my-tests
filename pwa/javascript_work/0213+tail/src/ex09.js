//numbers[0]~(<=length-1)까지(<length 까지) 더하고 / length => 정수 소수점 한자리 까지


function solution(numbers) {
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return parseInt(sum/numbers.length*10)/10;
}

console.log(solution([89,90,91,92,500]));