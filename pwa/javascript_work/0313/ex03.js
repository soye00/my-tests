const person = {
    name: 'John',
    foo(callback) {
        setTimeout(callback.bind(this) // 👉 bind
            , 1000);
    }
}

person.foo(function () {console.log(this.name);});