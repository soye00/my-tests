const mysql = require('mysql2');

function people_update(person_id, name, age) {
    const dbInfo = {
        host : '127.0.0.1',
        user : 'root',
        password: 'rootpassword',
        database : 'qw',
    }

    const connection = mysql.createConnection(dbInfo);

    connection.connect(); // db 연결

    const sql = 'UPDATE people SET person_name=?, age=? WHERE person_id=?';

    connection.query(sql,[name, age, person_id],(err, result) => {
        if (err) throw err;
        console.log(`result = ${result}`);
    })

    connection.end();
}

module.exports = people_update;