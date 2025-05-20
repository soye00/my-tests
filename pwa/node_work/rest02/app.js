const express = require('express');
const app = express();

// CRUD 
app.get('/', (req, res) => {
    res.send('Hello Get!');
});

app.post('/', (req, res) => {
    res.send('Hello Post!');
});

app.put('/', (req, res) => {
    res.send('Hello Put!');
});

app.delete('/',(req, res) => {
    res.send('Hello Delete!');
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
});