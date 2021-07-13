const express = require('express');

const ProdutoController = require('./controllers/ProdutoController');
const CompraController = require('./controllers/CompraController');
const ProdutoCompraController = require('./controllers/ProdutoCompraController');

const routes = express.Router();

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.indexEspecifico);
routes.post('/produtos', ProdutoController.create);
routes.put('/produtos/:id', ProdutoController.put);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/compras', CompraController.index);
routes.get('/compras/:id', CompraController.indexEspecifico);
routes.post('/compras', CompraController.create);
routes.put('/compras/:id', CompraController.put);
routes.delete('/compras/:id', CompraController.delete);

routes.get('/produtocompra', ProdutoCompraController.index);
routes.post('/produtocompra', ProdutoCompraController.create);
routes.delete('/produtocompra/:id', ProdutoCompraController.delete);

module.exports = routes;