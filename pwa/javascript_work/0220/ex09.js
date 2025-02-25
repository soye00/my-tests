/*
 filter 💙Boolrean 반환값(t/f)💙에 따라서 필터링 하는 것

 reduce
 */

const result = [1,2,3,4,5].filter((item)=>{
    console.log('test'+item);
    // return true; // <-> f (반환 x)
    return item%2 ===0; //-> t 값만 반환
});
console.log(result);

const test = [
    {name : '홍길동', gender: '남자'},
    {name : '김철수', gender: '남자'},
    {name : '이영희', gender: '여자'}
].filter(obj => obj.gender === '남자')
console.log(test);