require('dotenv').config();
const { Sequelize } = require('sequelize');
const Factura = require('./models/Factura.js');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

Factura(sequelize);

module.exports = { sequelize, ...sequelize.models };