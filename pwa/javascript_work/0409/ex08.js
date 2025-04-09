function doA(){
    console.log(arguments);
    console.log(arguments.length);

    for(const element of arguments) {
        console.log(element);
    }
}

doA(10,20,30,40,50);