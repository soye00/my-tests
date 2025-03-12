// 콜백함수 -  매개변수가 함수로 ex) addEventListener


// setTimeout 2000 초 뒤에 함수 실행해라
const obj = {
    value: 100,
    foo(){
        // console.log(this.value);
        // const that = this;
        setTimeout(function (){
            console.log('콜백함수');
            // console.log(this);
            console.log(this.value); // > undefined
            // console.log(that.value); // > 100
        }.bind(this),2000); // bind > 100
    }
}


obj.foo();




// 화살표 함수의 this 는 상위객체를 가리킨다.

const a = () =>{
    console.log(this);

}

const b = {
    aa : 20,
    bb() {
        const c = () => {
        console.log(this);}
        c();
    }
}

a();
b.bb();







