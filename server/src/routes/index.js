const { Router } = require('express');

const marcaController = require('../controllers/marcaController');
const usuarioController = require('../controllers/usuarioController');
const categoriaController = require('../controllers/categoriaController');
const veiculoController = require('../controllers/veiculoController');
const modeloController = require('../controllers/modeloController');

const routes = new Router();

routes.get('/marcas', marcaController.index)
routes.post('/marcas', marcaController.store)
routes.get('/marcas/:idMarca', marcaController.show)
routes.put('/marcas/:idMarca', marcaController.update)
routes.delete('/marcas/:idMarca', marcaController.destroy)

routes.get('/usuarios', usuarioController.index)
routes.post('/usuarios', usuarioController.store)
routes.get('/usuarios/:idUsuario', usuarioController.show)
routes.put('/usuarios/:idUsuario', usuarioController.update)
routes.delete('/usuarios/:idUsuario', usuarioController.destroy)
routes.post('/login', usuarioController.login)

routes.get('/categoria', categoriaController.index)

routes.get('/veiculos', veiculoController.index)
routes.post('/veiculos', veiculoController.store)
routes.get('/veiculos/:idVeiculo', veiculoController.show)
routes.put('/veiculos/:idVeiculo', veiculoController.update)
routes.delete('/veiculos/:idVeiculo', veiculoController.destroy)

routes.get('/modelos', modeloController.index)
routes.post('/modelos', modeloController.store)
routes.get('/modelos/:idModelo', modeloController.show)
routes.put('/modelos/:idModelo', modeloController.update)
routes.delete('/modelos/:idModelo', modeloController.destroy)


module.exports = routes
