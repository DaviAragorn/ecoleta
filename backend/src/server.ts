import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log("hi");
    res.json(['Daru']);
});

app.listen(3333);