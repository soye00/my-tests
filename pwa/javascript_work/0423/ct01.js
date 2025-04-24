//소수 찾기
/*
입력받은 숫자 n 사이에 있는 소수의 개수를 리턴.
소수의 개수.
소수는 1과 자기 자신으로만 나누어지는 수 & 1은 소수 아님

number n -> [] 배열로 담아서 -> 개수를 리턴

n 사이에 소수의 개수를 구하기
소수.. 1과 자기자신으로만 나ㅇ너어아너아ㅣ러너정ㄴ아티라ㅓ컬ㅇㄹ
제곱근 까지 수로 나눠보기


 */

// console.log(Math.sqrt(10)); //3.16
// // 10을 ~3까지 수로 나누어 떨어지는 수 있으면 -> 소수아님
//
// let a = [2,3,4,5]
// 200 을 ~14 까지 수로 나누어 떨어지는 수 없으면 소수

// console.log(Math.floor(3.12345));
// console.log(Math.ceil(3.12345));
//
//
//
// function solution(n){
//     let prs = [];
//     for(let i = 2; i <= n; i++){
//         let isPrime = 1;
//         const sq = Math.floor(Math.sqrt(i));
//         for(let j = 2; j <= sq; j++){
//             if(i % j ===0){
//                 isPrime = 0;
//                 break;
//             }
//         }
//         if(isPrime){
//             prs.push(i);
//         }
//     }
//     return prs.length
// }


//이중 쓰긴 했는데
//주어진 자연수만큼의 크기를 가진 배열에 1을 전부 넣어 선언
//for문을 돌리는데
//해당하는 값이 하나 있으면 얘를 주어진 자연수 크기 안까지 돌려서 위 배열에 해당 위치에 0씩 넣어요
//이중 포문 도는 조건은 해당 숫자가 1일때 돌아요
//0인 애들만 꺼내서 숫자 몇개 하면 자연수 안에 있는 소수의 양
//초기 배열 안에 전부 1이 있죠? [3]
//이 배열 인덱스가 1이면 소수일 가능성이 있다
//돌고 소수가 아니면 0
//소수가 아직까지 가능성이 있다면 1



//공간 복잡도 시간복잡도라는 표현을 사용하는데
//얘네는 반비례하게 움직여요
//지금 이문제에서 시간 초과가 뜨고 있는 이유는
//공간복잡도를 낮추고 시간복잡도를 올려서 생기는
//시간초과가 뜬다는건 제곱 아래 또는 한번더 체크하는 시간 복잡도 n을 제외시키는 방향






function solution(n){
    let res = 0;
    for(let i = 2; i <= n; i++){
        let isPrime = 1;
        const sq = Math.floor(Math.sqrt(i));
        for(let j = 2; j <= sq; j++){
            if(i % j ===0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime){
            res++;
        }
    }
    return res
}

console.log(solution(10)); // > 4
console.log(solution(5)); // > 3
console.log(solution(6));
console.log(solution(1000000));







// function solution(n) {
//     var answer = [];
//     let root = Math.floor(Math.sqrt(n)); //
//     for(let i = 0; i <= root; i++){
//         for(let j = 0; j <= root; j++){
//             if(n % (i*j) === 0){}
//             else{}
//         }
//     }
//
//     return answer;
// }