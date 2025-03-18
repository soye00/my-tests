var funcs = [];
for(let i = 0; i < 3; i++){
    funcs[i] = function(){
        return i;
    }
}

// // var + 클로저
// var funcs = [];
// for(var i = 0; i < 3; i++){
//     funcs[i] = (function (id){
//         return function (){
//             return id;
//         }
//     }(i));
// }

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());