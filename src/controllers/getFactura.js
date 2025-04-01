const { Factura } = require('../db.js');

const getFactura = async (req, res) => {
    try {
        const facturas = await Factura.findAll();
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener facturas' });
    }
};

module.exports = { getFactura };
