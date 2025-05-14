/*
Content-Type': 'text/plain : text 날리기

 */


const http = require('http');
const fs = require('fs');

http.createServer( async (req, res) => {
    try {
        const password = '비밀번호';

        const indexhtml = await fs.readFileSync('./index.html',(err, data) => {
            if (err) throw err;
            return data;
        });

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(indexhtml);
        // res.end('<html><body><h1>안녕</h1></body></html>\n');
    }catch(e){
        console.error(e);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(e.message);
    }

}).listen(8080,'0.0.0.0', () => {
    console.log('Server started on port 8080');
});