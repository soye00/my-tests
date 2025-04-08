const myIter = {
    [Symbol.iterator](){
        let a = 1;
        const max = 5;
        return{
            next(){
                return {
                    value: a++,
                    done: max < a, // done 이 true 가 되면 for of 멈춤
                }
            }
        }
    }
}
/*
객체안에 Symbol.iterator 메서드를 생성하면 생성된 메서드는 객체를 리턴해야 하고
리턴된 객체 안에는 next() 함수가 생성되고
next 함수는 value 와 done 을 반환하는 객체
for of 로 나열이 가능하다.
 */
for(const element of myIter){
    console.log(element);
}