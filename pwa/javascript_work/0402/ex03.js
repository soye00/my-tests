const tel = '010-1234-5678';
const re = /^\d{3}-\d{4}-\d{4}$/;

console.log(re.test(tel));
console.log(re.exec(tel));