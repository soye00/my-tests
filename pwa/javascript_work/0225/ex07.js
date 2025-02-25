function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function (){
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1); // > Circle { radius: 5, getDiameter: [Function (anonymous)] }
console.log(circle2); // > Circle { radius: 10, getDiameter: [Function (anonymous)] }

console.log(circle1.getDiameter()); // > 10
console.log(circle2.getDiameter()); // > 20
