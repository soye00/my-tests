/*
클래스 class
일반함수 호출 불가 - > new 생성자로 호출 가능
프로퍼티를 constructor 에 지정해야 함

 */


class Student{
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    doB(age){
        this.age = age;
    }
    static doA(){
        console.log('정적 메서드 입니다');
    }

}

// Student.doA();

const stu = new Student('kim','1학녕');
// stu.doA();// 에러
stu.doB(30)
console.log(stu);