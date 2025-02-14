/// 문자열에서 특정 문자 제거
// 문자열 my_string : abcdef  특정문자 letter : f

// 유사배열
//var a = "abcd"
//console.log(a[0]); -> a : 꺼내오진 못함

// 


function solution(my_string, letter) {
    var answer = ''; // 빈문자 공백 만들어주기 
    for(let i = 0; i < my_string.length; i++){
        if( my_string[i] !== letter)  //다르면  
        answer = answer + my_string[i];        //더하기
    }
    return answer;
}
console.log(solution('abcedf','f'));