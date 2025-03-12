/*

aa(); this -> 전역객체
new(); this {} -> 생성하는 객체
person.aa(); person -> this

strict 모드 에서 this 는 undefined 로 할당 

 */

function AA(name){
    this.name = name;
    console.log(this);
}

AA();
new AA();

//aa가 this로 할당
const aa = {
    name : 'lee',
    getThis(){
        console.log(this);
    }
}

aa.getThis()