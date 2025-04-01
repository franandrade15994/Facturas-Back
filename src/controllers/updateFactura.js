const { Factura } = require('../db.js');

const putFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const factura = await Factura.findByPk(id);
        if (!factura) return res.status(404).json({ error: 'Factura no encontrada' });

        await factura.update(req.body);
        res.status(200).json(factura);
    } catch (error) {
        res.status(400).json({ error: 'Error al editar factura' });
    }
};

module.exports = { putFactura };