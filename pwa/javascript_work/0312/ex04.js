function foo(){
    this.a = 10;
    this.b = 20;
    console.log(this);
}

// foo();
//
// new foo();

// obj ->  this가 된다
const obj = {foo:foo, c:30};
obj.foo();

// this 를 빈객체로 할당
// this 를 강제로 변경해서 함수 호출 가능
foo.apply({c:'새로운 내용'}) // > { c: '새로운 내용', a: 10, b: 20 }

foo.call({d: 'call'}) // > { d: 'call', a: 10, b: 20 }

foo.bind({e: 'this 변경 가능'})(); // > { e: 'this 변경 가능', a: 10, b: 20 }
// apply 와 call 은 함수 호출 되지만 bind 는 호출 X 👉 (); 로 호출 해야함

