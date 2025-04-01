const Router = require('express');

const { getFactura } = require('../../controllers/getFactura.js');
const { postFactura } = require('../../controllers/postFactura.js');
const { putFactura } = require('../../controllers/updateFactura.js');
const { deleteFactura } = require('../../controllers/deleteFactura.js');


const facturaRouter = Router();

//GET
facturaRouter.get('/', getFactura);

//POST
facturaRouter.post('/', postFactura);

//UPDATE
facturaRouter.put('/:id', putFactura);

//DELETE
facturaRouter.delete('/:id', deleteFactura);

module.exports = facturaRouter;