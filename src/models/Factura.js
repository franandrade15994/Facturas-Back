const { DataTypes } = require('sequelize');

const Factura = (sequelize) =>
    sequelize.define(
        'Factura',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cuit: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            razonSocial: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fechaEmision: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            fideicomiso: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            monto: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            iva: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: false,
        }
    );

module.exports = Factura;
