const arr = [1,2,3,4,5];
arr.push(10,20);// 배열 뒤에 추가

console.log(arr);

arr.unshift(100,200); // 배열 앞에 추가
console.log(arr);

const last = arr.pop(); // 마지막 삭제
console.log(last);
console.log(arr);

const first = arr.shift(); // 처음 삭제
console.log(first);
console.log(arr);

arr.splice(2,1,); // 👉splice (시작인덱스, 삭제개수, 추가요소)
console.log(arr);

const brr = arr.map((item) => `<li>${item}</li>` ).join('\n');
console.log(brr); // > <li>200</li><li>1</li><li>3</li><li>4</li><li>5</li><li>10</li>


const obj = arr.reduce((a,b) => {
    console.log(a);
    console.log(b);
    a.name = 'go';
    a[b] = a[b] !== undefined ? a[b]+1 : 1;
    return a;
}, {});

console.log(obj);


