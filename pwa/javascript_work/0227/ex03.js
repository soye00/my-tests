//일반함수 호출을 막는 방법
//1. new.target 2.

// function aa(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// const a1 = aa('박길동', 20);
// const a2 = new aa('박기동',20);
//
// console.log(a1); // > undefined
//
// console.log(a2); // > aa { name: '박기동', age: 20 }
//


function aa(name,age){
    this.name = name;
    this.age = age;
    //🔑 aa로 호출해도 new aa로 호출되도록
    if( ! new.target)
        return new aa(name,age);
    // if( typeof new.target === 'undefined')
    //     return new aa(name,age);
}

const a1 = aa('박길동', 20);
const a2 = new aa('박기동',20);

console.log(a1); // >aa { name: '박길동', age: 20 }

console.log(a2); // > aa { name: '박기동', age: 20 }

