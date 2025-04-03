const isDigit = (str) => /^\d+$/.test(str);

console.log(isDigit('1234'));
console.log(isDigit('dskf1234'));
console.log(isDigit('dfsfsf'));

const isStartString = (str) => /^[a-zA-Z]/.test(str);

console.log(isStartString('abc2929'));
console.log(isStartString('123dkdkd'));