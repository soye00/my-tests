// const arr = [1,2,3,4,5,6];
//
// const test = arr.filter((item)=> 3>item);
//
// console.log(test);

const review = [
    {uid:'123123123', title:'abcd'},
    {uid:'123123123', title:'aaaa'},
    {uid:'123123123', title:'ttte'},
]

const filterReview =
    // review.filter((item) => item.title.includes('a'));
    // {} 넣으면 return 필수 ! {} return = > 여러줄 작성 가능
    review.filter((item) => {
        console.log(`item=${JSON.stringify(item)}`);
        return item.title.includes('a')
    });

console.log(filterReview);