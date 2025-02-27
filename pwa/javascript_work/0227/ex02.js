function aa(){
    console.log(new.target);
}

aa(); // 일반함수 호출 -> window global
console.log('-------------------------');
new aa(); // -> this 빈객체 {} > aa{}