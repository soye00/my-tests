const arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


[1, 2, 3, 4, 5].forEach((item) => {console.log(item)});

const result = [1, 2, 3, 4, 5].forEach((item) => {console.log(item); return item;});
console.log(result); //-> 반환값이 없다 undefined

const result2 = [1, 2, 3, 4, 5].map((item) => {console.log(item); return item;});
console.log(result2);