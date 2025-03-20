// 정적 메서드 정적 변수
console.log(Math.PI);

class DBInfo{
    static URL = 'supabase';
    static URLPASS = 'password';
}

// const dbinfo = new DBInfo(); -> 이렇게 접근하면 X
// console.log(dbInfo.URL); //undefined
// console.log((dbInfo.URLPASS));  //undefined 

// 바로 접근해서 사용 해야함

console.log(DBInfo.URL);
console.log(DBInfo.URLPASS);