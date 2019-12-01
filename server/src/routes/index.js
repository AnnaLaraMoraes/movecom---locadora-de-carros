const { Router } = require('express');

const marcaController = require('../controllers/marcaController');


const routes = new Router();

routes.get('/marcas', marcaController.index)
routes.post('/marcas', marcaController.store)
routes.get('/marcas/:idMarca', marcaController.show)
routes.put('/marcas/:idMarca', marcaController.update)
routes.delete('/marcas/:idMarca', marcaController.destroy)


module.exports = routes
