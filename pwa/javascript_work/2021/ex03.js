/*

 */

const result =
    [1,2,3].filter(item => {
        console.log(item)
        return item%2; // 0 = false -> return x -> 홀수만 리턴
    });
console.log(result);



const people = [
    {name: 'John', age: 1},
    {name: 'park', age: 2},
    {name: 'kim', age: 3}
];

const result1 = people.filter(item => {
    console.log(item);
    return item.name.includes('John');
});

console.log(result1);

// const result2 = result1.map(item => {
//     return `<li>name = ${item.name}</li>
//             <li>age = ${item.age}</li>`;
// }).join(" ");
// console.log(result2);

const result2 =
    people
    .filter(item => item.name.includes('John'))
    .map( item => `
                                        <li>name = ${item.name}</li>
                                        <li>age = ${item.age}</li>
                                        ` )
    .join(" ");
console.log(result2);