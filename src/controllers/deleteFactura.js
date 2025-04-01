const { Factura } = require('../db.js'); 

const deleteFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const factura = await Factura.findByPk(id);
        if (!factura) return res.status(404).json({ error: 'Factura no encontrada' });

        await factura.destroy();
        res.status(200).json({ mensaje: 'Factura eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar factura' });
    }
};

module.exports = { deleteFactura };