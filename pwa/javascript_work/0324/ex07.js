const arr = [1,2,3,4,5,6,7,8,9,10];

// - 배열의 요소 가져오기

// for of 배열 문자열에서만 사용 가능(객체에서 사용  X)
for(const element of arr){
    console.log(element);
}


// for in : 객체에서도 사용 가능 -> but 배열에서는 배열의 요소 값이 아닌 인덱스 키를 순회
for(const element in arr){
    console.log(element);
}

// 값을 불러오고 싶을 때
for(const element in arr){
    console.log(arr[element]);
}

// => for in 은 키-값 쌍을 다룰 때 유용

