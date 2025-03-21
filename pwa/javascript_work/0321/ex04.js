const obj = {
    aa : function (){},
    bb() {}
}

new obj.aa(); // 됨
// new.obj.bb(); ////안됨

console.log(obj.aa.hasOwnProperty('prototype')); // t
console.log(obj.bb.hasOwnProperty('prototype')); // f

