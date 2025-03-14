const counter = function (){

    return {
        increase(){
            return ++num;

        },
        decrease(){
            return --num;
        }
    }
}


console.log(counter.increase());