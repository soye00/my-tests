function aa(){
    // 'use strict'
    var a = 10;
    console.log(`a = ${a}`);
    delete a;
    console.log(`a = ${a}`);
}

aa();
