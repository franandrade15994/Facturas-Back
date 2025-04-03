const { Factura } = require('../db.js');
const nodemailer = require('nodemailer');

const postFactura = async (req, res) => {
    const { numero, cuit, razonSocial, fechaEmision, fideicomiso, monto, iva, estado } = req.body;

    try {
        if (!numero || !cuit || !razonSocial || !fechaEmision || !fideicomiso || !monto || !iva) {
            return res.send({ message: 'Todos los campos, excepto estado, son requeridos.' });
        }

        const repetido = await Factura.findAll({ where: { numero: numero } });
        if (repetido.length) {
            return res.send({ message: 'La Factura ya fue cargada' });
        }

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

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "franandrade15994@gmail.com",
                pass: "hyjy savg wfoh qkgb"
            },
            logger: true,
            debug: true
        });

        const mailOptions = {
            from: '"BICE Facturación" <franandrade15994@gmail.com>',
            to: "extfandrad@bice.com.ar, franandrade15994@gmail.com",
            replyTo: "franandrade15994@gmail.com",
            subject: "Nueva Factura Cargada",
            html: `<p>Se ha cargado una nueva factura, haz click 
                   <a href="${process.env.URL_ADMIN}">Aqui</a> para aprobar o rechazar la factura.</p>`
        };

        await transporter.sendMail(mailOptions);

        res.send({ message: 'Factura cargada correctamente y correo enviado' });

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.send({ message: error.message });
    }
};

module.exports = { postFactura };
