var a = [1,2,3,4,5,6];
a.reverse();
console.log(a);


function solution(num_list) {
    var answer = num_list.reverse();
    return answer;
}
console.log(solution([1,2,3,4,5,6,7,8,9]));


var a = 10;
var b = 20;

var temp = a;
a=b;
console.log(a);
console.log(b);
console.log(temp);




function solution2(num_list) {
    for (var i = 0; i <= parseInt(num_list.length / 2); i++) {
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }
    console.log(num_list);
    return num_list;
}
solution2([1,2,3,4,5,6,7,8,9]);


//
//
//
//         num_list[1] = num_list[num_list.length - 2];
//         num_list[2] = num_list[num_list.length - 3];