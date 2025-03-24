function doA(){
    console.log(this);
}
doA();

// 메서드 축약에서 this
const obj = {
    name: "디스디스",
    doA(){
        console.log(this.name);
    }
}
obj.doA();


// 화살표 함수에서 this
const arrow = () => {
    console.log('상위스코프' + JSON.stringify(this));
}
arrow();

// 상위 스코프의 this -> 
const obj2 = {
    name: "obj2",
    arrow: function (){
        (() => {
            console.log("this"+JSON.stringify(this));
        })();
    }
}
obj2.arrow();