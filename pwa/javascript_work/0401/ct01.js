// 개미군단
/*

개미군단이 사냥을 나감
사냥감의 체력에 딱 맞는 병력을 데리고 나감
장군개미는 5
병정개미 3
일개미 1

ex)
체력 23 여치 사냥
->
일개미 23마리도 괜찮지만 1*23 = 23
장군개미 4 병정개미 1 => 4*5 20, 3*1= 3 20 + 3 = 23
더 적은 병력으로 사냥 가능 => 딱 맞게 최소한의 병력

사냥감의 체력 hp 가 주어질 떄
사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면
몇마리의 개미가 필요한지를 리턴.

hp 23 -> 5
hp 24 -> 6
hp 999 -> 201

/5 199 ...4
/3 1 ...1
/1 ... 0

199 + 1 + 1 = 201

최소병력 ->
장군 5 로 나눠서 장군수 구하고 나머지 나누기 병정수 구하고 3 나머지는 일개미수
구한 수 다 더해서 리턴

 */

function solution(hp) {
   let answer = 0;
    let a = parseInt(hp/5);
    let b = (hp%5);
    let c = parseInt(b/3);
    let d = (b%3);
    answer = Number(a + c + d);
   return answer;
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));

