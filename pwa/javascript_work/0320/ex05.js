function FUNC(){

    console.log(new.target);
}

FUNC();  // undefined
new FUNC(); // [Function: FUNC]



