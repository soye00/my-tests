// const circle1 = {
//     radius : 5,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }
//
// const circle2 = {
//     radius : 10,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }
//
// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());
//

function Circle(radius){
    console.log(radius);
    this.name = '동그라미';
    return 'aa';
}

const ret = Circle(10);
console.log(ret);
const ret2 = new Circle(5);
console.log(ret2);

// const circle = new Circle(5);
