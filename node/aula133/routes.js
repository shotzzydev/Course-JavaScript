const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

// Rotas da home
route.get('/', homeController.pageHomeGet);
route.post('/', homeController.pageHomePost);

// Rotas de contato
route.get('/contato', contatoController.pageContatoGet);

module.exports = route;