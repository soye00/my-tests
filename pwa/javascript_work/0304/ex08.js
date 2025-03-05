//접근자 프로퍼티

const person = {
    fname : "hong",
    lname : "guildong",
    get fullName(){
        return this.fname + this.lname;
    },
    set fullName(fullName) {
        [this.fname, this.lname] = fullName.split(' '); // .split : 띄어쓰기 기준 나누기
    }
}
console.log(person.fullName);
person.fullName = 'park guildong';
console.log(person.fullName);


//split 
const aa = "a,b,c,d";
const test = aa.split(',');
console.log(test);

const [ele0, ele1, ele2, ele3] = aa.split(',');
console.log(ele0);
console.log(ele1);
console.log(ele2);
console.log(ele3);
