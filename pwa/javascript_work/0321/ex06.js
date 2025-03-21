const aa = (x,y) => ({x,y}); // 중괄호 return 을 예상 ()소괄호 추가해주기

const result = aa(10,20);

console.log(result);

const arr = [{name: 'lee'},{name: 'kim'},{name: 'park'}]
    .map((item, index, arr) => {
        console.log(`item ${JSON.stringify(item)}`);
        console.log(`index ${index}`);
        console.log(`arr ${arr}`);
        return `<div>name = ${item.name}</div>`;
});

console.log(arr);

// console.log(arr);  // return 10 ->[ 10, 10, 10, 10, 10 ]

/*
filter 리턴했을 때 -> true flase 로 item 반환
map -> 마음대로 반환가능

 */