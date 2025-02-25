const mysql = require('mysql2');
 // console.log(mysql);

 const dbInfo = {
     host : '127.0.0.1',
     user : 'root',
     password: 'rootpassword',
     database : 'qw',
 }

 const connection = mysql.createConnection(dbInfo);
 // console.log(connection);

 //db 연결 시작
 connection.connect();

 connection.query('select * from people',(error, result, fields)=>{
 if (error) throw error;
 console.log(result);
})

 //db 연결 끊기
 connection.end();
