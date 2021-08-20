const express = require('express');
const app = express();

// GET
app.get('/',(req, res) => {
    console.log('Hello World')
    res.send('GET')
});

// POST
app.post('/', (req, res) => {
    console.log('method post')
    res.send('POST')
});

//PUT
app.put('/', (req, res) => {
    console.log('method put')
    res.send('PUT')
});

//DELETE
app.delete('/', (req, res) => {
    console.log('method delete')
    res.send('DELETE')
});

app.listen(3000, ()=> {
    console.log('server jalan')
});