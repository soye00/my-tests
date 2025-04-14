// filter 중복제거
const uniq = [3,4,4,5,2,3,5].filter((v,i,self) => {
    console.log(self.indexOf(v)); // v 값의 첫번째 인덱스만 출력
    console.log(`i=${i}`);
    return self.indexOf(v) === i; // 같으면 true -> 출력
});
console.log(uniq);

// set 중복제거
console.log(uniq);
console.log(new Set([1,3,3,5,5]));