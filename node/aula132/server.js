const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        Outro Campo: <input type="text" name="aquioutrocampo">
        <button>Olá mundo</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('Oi')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://127.0.0.1:3000');
    console.log('Servido executando na porta 3000');
});