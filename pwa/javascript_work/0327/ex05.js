// sort
/*
sort 안에 고차함수를 넣을 때
a,b 파라메타를 받아와서
a > b 양수 리턴
a == b 0 리턴
a < b 음수 리턴

 */

const sorted = (a,b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}

const arr = [1,2,4,3,10];
console.log(arr.sort((a,b) => a-b)); // 오름차순
console.log(arr.sort((a,b) => b-a)); // 내림차순 
console.log(arr.sort((sorted)));

const brr = ['aa','cc','dd'];
console.log(brr.sort());

