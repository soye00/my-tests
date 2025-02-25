const person = {};
Object.defineProperties(person,{
    firstName: {
        value : 'Alice',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value : 'Bob',
        writable: true,
        enumerable: false,
        configurable: false
    },
    fullName: {
        get(){
            return `${this.firstName} ${this.lastName}`;
        },
        set(fn){
            [this.firstName,this.lastName] = fn.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = '홍 길동'; //-> set(fn) fn의 값으로
console.log(person.fullName);

//writable true인 경우만 수정 가능
// person.firstName = '길동';
// person.lastName = '홍';
//
// console.log(person.firstName); // > 길 동
// console.log(person.lastName); // > Bob


// for (const key in person) {
//     console.log(key);
// }
//
//
// delete person.firstName;
// delete person.lastName;
// console.log(person.firstName); // > undefined
// console.log(person.lastName); // > Bob
