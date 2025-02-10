var a = 3;
var b;

switch (a) {
    case 1:
       b = "this is 1";
       break;
    case 2:
        b = "this is 2";
        break;
    case 3:
        b = "this is 3";
        break;
    case 4:
        b = "this is 4";
        break;
    default:
        b = "basic";
}

//break 만나면 switch 탈출 
console.log(b);