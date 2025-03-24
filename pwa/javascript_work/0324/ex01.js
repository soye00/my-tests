class Animal{
    constructor(){
        this.a = 10;
        console.log("animal");
    }
    doA(){
        console.log("animal.doA");
    }
}

class Dog extends Animal{
    constructor() {
        super();
        this.b = 20;
        console.log("Dog");
    }
}

class Cat extends Animal{
    constructor() {
        super();
        this.c = 30;
        console.log("cat");
    }
}

const dog = new Dog();
console.log(dog);
const cat = new Cat();
console.log(cat);