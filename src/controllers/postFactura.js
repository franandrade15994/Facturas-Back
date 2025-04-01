const { Factura } = require('../db.js');

const postFactura = async (req, res) => {
    const { numero, cuit, razonSocial, fechaEmision, fideicomiso, monto, iva, estado } = req.body;

    try {
        // Validación de campos requeridos
        if (!numero || !cuit || !razonSocial || !fechaEmision || !fideicomiso || !monto || !iva) {
            return res.send({ message: 'Todos los campos, excepto estado, son requeridos.' });
        }

        // Verificar si la factura ya existe
        const repetido = await Factura.findAll({ where: { numero: numero } });
        if (repetido.length) {
            return res.send({ message: 'La Factura ya fue cargada' });
        }

        // Crear la factura
        await Factura.create({
            numero,
            cuit,
            razonSocial,
            fechaEmision,
            fideicomiso,
            monto,
            iva,
            estado,
        });

        res.send({ message: 'Factura cargada correctamente' });
    } catch (error) {
        res.send({ message: error.message });
    }
};

module.exports = { postFactura };
