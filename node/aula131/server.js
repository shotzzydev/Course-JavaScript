const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Olá mundo</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com agente.');
});


app.listen(3000, () => {
    console.log('Acessar http://127.0.0.1:3000');
    console.log('Servido executando na porta 3000');
});