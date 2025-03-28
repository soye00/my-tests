const arr = ['aa', 'bb', 'cc', 'aa', 'dd', 'bb'];

// reduce

const result = arr.reduce((a,b)=> {
    console.log(`a = ${JSON.stringify(a)}`);
    console.log(`b = ${b}`);
    a[b] = (a[b] || 0) + 1 ;
    return a;
},{});

console.log(`result = ${JSON.stringify(result)}`);