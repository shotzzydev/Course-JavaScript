const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

// Rotas da home
route.get('/', homeController.pageHomeGet);
route.post('/', homeController.pageHomePost);

// Rotas de contato
route.get('/contato', contatoController.pageContatoGet);

module.exports = route;