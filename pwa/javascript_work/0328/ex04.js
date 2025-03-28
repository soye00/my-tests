const arr = ["aa", "bb", "cc"];

// map 이용해서 webkit-aa webkit-bb webkit-cc 로 만들기

class AA {
    constructor(pre) {
        this.pre = pre;
    }
    add(arr){
        return arr.map((item) => `${this.pre}-${item}`);

    }
}
const aa = new AA('webkit');
const prearr = aa.add(arr);
console.log(prearr);



// const result = arr.map((item) => {
//     console.log(item);
//     return `webkit- ${item}`;
// });
//
// console.log(result);
