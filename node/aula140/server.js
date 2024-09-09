require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log('Conectei à base de dados');
    app.emit('ready')
})
.catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Acessar http://127.0.0.1:3000');
        console.log('Servido executando na porta 3000');
    });
});