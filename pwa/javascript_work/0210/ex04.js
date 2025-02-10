// const a = 'abcedef';
//
// const b = a.indexOf('b'); // b가 몇번째에 있는지 => 1
// console.log(b);
//
// const c = a.indexOf('c');
// console.log(c); //=> 2
//
// const d = a.indexOf('k');
// //-> 없으면 -1 출력



function solution(str1, str2) {
    const test = str1.indexOf(str2);
    if (test === -1) {
        return 2;
    } else {
        return 1;
    }
    var answer = 0;
    return answer;
}


const res = solution('ab6CDE443fgh22iJKlmn1o','6CD');
console.log(`res = ${res}`);



function solution2(str1, str2) {
    return str1.indexOf(str2) === -1? 2 : 1;

}


const son = solution2('asjdkjksjdlkj','jdk');
console.log(`son = ${son}`);
