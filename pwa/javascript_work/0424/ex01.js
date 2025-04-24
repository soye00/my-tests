// module -> import from
// commonjs -> require
// "type" 기본은 commonjs

const lodash = require('lodash');

const{debounce,throttle} = lodash;

// console.log(lodash.debounce);
// console.log(lodash.throttle);

const aa = debounce(() => {
    console.log('debounce')
},300)

//debounce -> 여러개가 들어와도 300 안에 한 번만 실행
aa();
aa();
aa();
aa();
aa();
aa();
aa();

const bb = throttle(()=>{
    console.log('throttle');
},300);

bb();
bb();
bb();
bb();
bb();
bb();






