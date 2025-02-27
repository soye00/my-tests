const mysql = require('mysql2');
// console.log(mysql);

function people_insert(name, age) {
    const dbInfo = {
        host : '127.0.0.1',
        user : 'root',
        password: 'rootpassword',
        database : 'qw',
    }

    const connection = mysql.createConnection(dbInfo);


    //db 연결 시작
    connection.connect();

    const sql = 'INSERT INTO people ( person_name, age) values (?,?)';
    const values = [name,age];

    connection.query(sql, values,(error, result)=> {
        if (error) throw error;
        console.log(result);
    })

    //db 연결 끊기
    connection.end();
}
module.exports = {people_insert};