//[Symbol.iterator]Array.prototype
//[Symbol.iterator]Map.prototype
//[Symbol.iterator]Set.prototype
// for of

//[Symbol.iterator] {} => 객체는 in 으로 순회

const iter = {
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        return {
            next() {
                return {value:cur++, done: max < cur};
            },
        };
    },
};

/*
이터러블 프로토콜 for of, 스프레드문법, 배열분해 가능
 */

for(const element of iter) {
    console.log(element);
}

console.log(...iter);
const [a,b,c,d] = iter;
console.log(`a=${a}`);
console.log(`b=${b}`);
console.log(`c=${c}`);
console.log(`d=${d}`);


// 이터레이터 프로토콜
const 이터레이터 = iter[Symbol.iterator]();
console.log(이터레이터.next());
console.log(이터레이터.next());
console.log(이터레이터.next());
