var i = 0;
while (true){
    console.log(i);
    i++; // 출력 후 1증가
    if(i===3){
        break; // break => for, while, switch 탈출가능 
    }
}
console.log('for 시작');
i=0;
for(;;){
    i++; // 1증가 후 출력
    console.log(i);
    if(i===3) break;
}