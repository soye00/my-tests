const Stack = function (){
    function Stack(arr=[]){
        if(!Array.isArray(arr)){
            throw new TypeError(`${arr}is not Array`);
        }
        this.arr = arr;
    }

// Stack.prototype.push = function(item){
//     // console.log('this = ');
//     // console.log(this);
//     this.arr.push(item);
// }

    Stack.prototype = {
        push: function(arr){
            this.arr.push(arr);
        },
        pop(){
            return this.arr.pop();
        },
        entries(){
            return [...this.arr];
        }
    }
    return Stack;
}();


const mystack = new Stack([1,2,3]);
// new stack('배열아닌거')

mystack.push(4);
mystack.push(5);

mystack.pop();

console.log("mystack =");
console.log(mystack);
console.log(mystack.entries());