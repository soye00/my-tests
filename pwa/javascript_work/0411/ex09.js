const user = {
    name: '홍길동',
    addr: {
        zipcode: 101,
        city: "daegu"
    },

}

const { name, addr} = user;
console.log(`name=${name} addr=${addr}`); //addr=[object Object]
console.log(JSON.stringify(addr)); //{"zipcode":101,"city":"daegu"}

console.log(`name = ${user.name} addr city: ${user.addr.city}`);

const{addr:{city}}=user;
console.log(city); //daegu
