function *test(){
    yield 1;
    yield 10;
}

const t = test();

console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
