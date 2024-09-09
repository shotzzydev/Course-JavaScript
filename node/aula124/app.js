// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Oli');
console.log(p1);

// axios('https://www.evohosting')
// .then(response => console.log(response))
// .catch(e => console.log(e));

// const p1 = new Pessoa('Luan');
// console.log(p1);