import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.get('/', (req, res) =>{
    return res.json({nome :  "Edik"})
});

app.post('/', (req, res) =>{
    return res.json({idade: "28"})
} )

app.listen(8888, () => console.log('Server is running!'));
