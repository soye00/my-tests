function add(x,y){
    if(typeof x !== 'number'){
        // throw new TypeError ('xy는 숫자 이어야 합니다');
        //🔷💁‍♀️에러를 강제로 발생
        x = 0;
    }
    if(typeof y !== 'number'){
        y = 0;
    }
    return x+y;
}
console.log(add(2));
console.log(add('a','b'));

console.log('끝까지 진행?');