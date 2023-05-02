// import { openDb } from './configDB.js';
import { createTable, insertPessoa, updatePessoa } from './Controller/Pessoa.js'

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function (req, res) {
    res.send("Hello word");
})

app.post('/pessoa', function (req, res) {
    insertPessoa(req.body)
    res.json({
        "statusCode": 200
    })
})

app.put('/pessoa', function (req, res) {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })
    } else {
        updatePessoa(req.body)
        res.json({
            "statusCode": 200
        })
    }
})


app.listen(3000, () => console.log('API rodando'));