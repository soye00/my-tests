var x = 'global X';
var y = 'global Y';

function outer(){
    var z = 'outer local z';

    console.log(`x = ${x}`);
    console.log(`z = ${z}`);
    console.log(`y = ${y}`);

    function inner(){
        var x = 'inner local x';

        console.log(`x = ${x}`);
        console.log(`z = ${z}`);
        console.log(`y = ${y}`);
    }
    inner();
}
outer();
console.log(x);
// console.log(z);