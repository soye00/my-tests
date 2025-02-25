// 불변 객체 - 객체가 아니거나 동결된 객체는 무시 -> (객체이고 동결되지 않으면 동결)
function deepFreeze(target) {

    if(target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);

        Object.keys(target).forEach(key => {
            deepFreeze(target[key]);
        });
    } return target;

}

const person = {
    name: 'Lee',
    addr : {city: 'seoul'},
    friends : {name: 'park', addr: {city: 'daegu'}},
};

deepFreeze(person);


// Object.preventExtensions(person); //프로퍼티 추가 금지 - 삭제, 값 변경은 가능

// Object.seal(person); // 프로퍼티 추가,삭제 금지 - 값 변경은 금지

// Object.freeze(person);// 프로퍼티 추가, 삭제, 값 변경 금지
// Object.freeze(person.addr); //
//
// //얕은 객체 동결 - 직속 프로퍼티만 동결(freeze)한다 👉중첩 객체까지는 동결하지 X
// person.addr.city = 'Busan';
// console.log(person);


// person.age = 20;
// console.log(person);
//
// person.name = 'Park';
// console.log(person);
// const ret = Object.isExtensible(person);
// console.log(ret);