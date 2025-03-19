class person = {
    //데이터 프로퍼티 예시


    constructor(fName, lName) {
        this.fname : fName;
        this.lanme : 'lName;
        //접근자 프로퍼티
        get fullName(){
            return `fname${this.fname} lName{this.lname}`;
        },
        set fullName(name){
            [this.fName, this.lName] = name.split
        },
    }
    }
console.log(person);
console.log(person.fullName);

