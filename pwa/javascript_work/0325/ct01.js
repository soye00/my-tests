/*

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때
nums 에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
소수가 되는 경우의 개수를 리턴
개수를 리턴

더했을 때 값이 소수인지 확인




[1,2,3,4]
1+2+4 = 7 1개

[,1,2,7,6,4]
1,2,4 -> 7
1,4,6 -> 11
2,4,7 -> 13
4,6,7 -> 17
리턴 4

더해서 소수가 나오는 경우의 수........

세개를 골라 더했을 때
소수가 되는 경우의 수


 */





function solution(nums) {
    myset = new Set();
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            for(let k = 0; k < nums.length; k++){
                if(i != j && j != k && k != i){
                    const sum = nums[i] + nums[j] + nums[k];
                    // console.log(`Sum: ${sum}`);
                    if(prime(sum))
                        myset.add(sum)
                }
            }
        }
    }


    return answer;
}

function prime(item){
    const primes = []
}