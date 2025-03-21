const base = {
    sayHi(){
        console.log('base sayhi 함수')
    }
}

const derived = {
    __proto__: base, // 두개를 연결
    sayHi(){
        super.sayHi(); // super 사용 가능
        console.log('derived sayhi 함수')
    },

    arrow: () => {
        // super.sayHi(); super 사용 불가(화살표함수&일반함수)
    }
}

derived.sayHi();