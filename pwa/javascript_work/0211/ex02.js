var a = 10;
//
// for(;;){
//     console.log('1' +a);
//     a++;
//     if(a===20){
//         break;
//     }
// }

while(true){
    a++;
    if(a===15){
        continue;
    }
    console.log('1' +a);
    if(a===20){
        break;
    }
}