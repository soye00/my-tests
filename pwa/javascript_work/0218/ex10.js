function doPrint(name,age,gender,height,width){
    console.log("name" + name);
    console.log("age" + age);
    console.log("gender" + gender);
    console.log("height" + height);
    console.log("width" + width);
}
doPrint("홍길동",20,"남자","180","65");

// 🤍 권장 🤍
const person = {
    name : "홍길동",
    age : 30,
    gender : "남자",
    height : 180,
    width : 65
}
function  doPrint2(person){
    console.log("name" + person.name);
    console.log("age" + person.age);
    console.log("gender" + person.gender);
    console.log("height" + person.height);
    console.log("width" + person.width);
}
doPrint2(person);