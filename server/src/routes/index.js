const { Router } = require('express');

const marcaController = require('../controllers/marcaController');


const routes = new Router();

routes.get('/marcas', marcaController.index)