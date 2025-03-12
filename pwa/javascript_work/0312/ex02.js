//🎈 객체 리터럴로 객체 생성
const circle = {
    radius: 5, // 변수
    getDiameter(){
        return 2 * circle.radius;
    } // 함수 존재
}
console.log(circle.getDiameter()); // > 10;

const circle2 = {
    radius: 5, // 변수
    getDiameter(){
        return 2 * this.radius;
    } // 👉 this
}
const newcircle = new Circle();
console.log(newcircle.getDiameter()); // > 10;







//🎈 new 생성자함수 객체 생성
function Circle(){
    this.radius = 5;
    this.getDiameter = function(){
        return 2 * circle.radius;
    } // 메모리 방지 위해 프로토타입 이용하기 -> Circle.prototype.getDiameter
}
const newCircle = new Circle();
console.log(newCircle); // > Circle { radius: 5, getDiameter: [Function (anonymous)] }