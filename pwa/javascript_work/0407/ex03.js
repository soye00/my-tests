// commonjs nodejs => require
// modulejs react => import

const dayjs = require('dayjs');
// console.log(dayjs);

const now = dayjs();
console.log(now.format('YYYY년MM월DD일'));

const 내년 = dayjs(now).add(1, 'year');
console.log(내년.format('YYYY년MM월DD일'));

const 다음달 = dayjs(now).add(1, 'month');
console.log(다음달.format('YYYY년MM월DD일'));

const 저번달 = dayjs(now).add(-1, 'month');
console.log(저번달.format('YYYY년MM월DD일'));

const 마지막날 = dayjs(now).endOf('month').date();
console.log(마지막날);



