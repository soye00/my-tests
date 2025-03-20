// 상속관계
// 부모클래스 자식클래스

// 폰 -> 스마트폰

class Phone{
    //공통적인거 부모태그에
    constructor(number, brand){
        this.number = number;
        this.brand = brand;
    }
}

class SmartPhone extends Phone{
    // 고유의 특성
    constructor(number, brand, internet ) {
        super(number, brand);
        this.internet = internet;
    }
}

const phone = new Phone('01034343434', 'samsung');
const smartPhone = new SmartPhone('01012345678', 'apple', 'true');

console.log(phone);
console.log(smartPhone);


