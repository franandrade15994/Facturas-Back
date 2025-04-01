const { Router } = require('express');
const facturaRouter = require('./facturaRouter/facturaRouter.js');

const router = Router();

router.use('/api/factura', facturaRouter);

module.exports = router;